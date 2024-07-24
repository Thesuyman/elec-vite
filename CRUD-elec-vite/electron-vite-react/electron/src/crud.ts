import { AppDataSource } from "./data-source";
import {User} from './entity/User';

export async function createUser(username: string, password: string, email: string) {
    const user = new User();
    user.username= username;
    user.password= password;
    user.email = email;
    await AppDataSource.manager.save(user);
    console.log('User đã được tạo', user);

}

export async function getUsers() {
    const users = await AppDataSource.manager.find(User);
    console.log("all users:", users);
    return users;
}

export async function updateUser(id: number, newUsername: string,
newPassword: string, newEmail:string) {
    
    const user = await AppDataSource.manager.findOneBy(User, {id});
    if(user){
        user.username = newUsername;
        user.password = newPassword; 
        user.email = newEmail;
        await AppDataSource.manager.save(user);
        console.log('User đã được update',user);

    }else{
        console.log('Không tìm thấy user')
    }
    
}

export async function deleteUser(id: number) 
{
    const user =await AppDataSource.manager.findOneBy(User, {id}) ;
    if(user){
        await AppDataSource.manager.remove(user);
        console.log('user đã bị xóa', user);
    } else{
        console.log('không tìm thấy user')
    }
}