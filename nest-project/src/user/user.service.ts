import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserService {
    private users = [];

    getAll() {
        return this.users;
    }

    getOneUserById(id: string) {
        return this.users.find((user) => user.id == id);
    }

    createUser(user: CreateUserDto) {
        this.users.push({
            ...user,
            id: new Date().valueOf(),
        });
        return user;


    }

    updateUser(data: UpdateUserDto, id: string) {
        const index = this.users.findIndex(value => value.id == id);

        return Object.assign(this.users[index], data);
    }

    deleteUserById(id:string){
        const index = this.users.findIndex(value => value.id == id);

        this.users.splice(index,1);

        return 'User Deleted'
    }
}
