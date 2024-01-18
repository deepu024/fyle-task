import axios from "axios";
import { notFound } from "next/navigation";
import UserName from "./UserName";

const User = async ({ params, searchParams }) => {
    
    const userName = params.username;
    if (!userName) {
        return notFound();
    }
    let userDet = [];
    let userRepo = [];
    let languages = {};
    let page = searchParams.page || 1;
    let hasNextPage = false;
    let error = false;

    try {
        const getLanguages = async (projectName) => {
            const { data } = await axios.get(`${process.env.BASE_URL}/repos/${userName}/${projectName}/languages`, {
                headers: {
                    'Authorization': `Bearer ${process.env.TOKEN}`
                }
            }, {
                next: { revalidate: 3600 }
            });
            return data;
        }

        const { data } = await axios.get(`${process.env.BASE_URL}/users/${userName}`, {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN}`
            }
        }, { next: { revalidate: 3600 } });

        const repo = await axios.get(`${process.env.BASE_URL}/users/${userName}/repos?page=${page}&per_page=10`, {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN}`
            }
        }, {
            next: { revalidate: 3600 }
        });
        if(data.message){
            console.log(data)
        }
        userDet = data;
        userRepo = repo.data;
        languages = {};
        for (let i = 0; i < userRepo.length; i++) {
            languages[userRepo[i].name] = (await getLanguages(userRepo[i].name));
        }

        await Promise.all(userRepo);
    } catch (e) {
        error = true
        console.log(e)
    }

    if(error){
        return (
            <div className="flex flex-col justify-center items-center text-white mt-24">
                <p className="font-bold text-5xl">
                USER NOT FOUND
                </p>
            </div>
        )
    }

    if(userRepo.length >= 9) {
        hasNextPage = true;
    }else {
        hasNextPage = false;
    }

    return (
        <UserName languages={languages} userDet={userDet} userRepo={userRepo} defaultPage={page} hasNextPage={hasNextPage}/>
    )
}

export default User;