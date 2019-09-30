import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  users:User[]=[];
  
  
  constructor(private http:HttpClient) { } 

  
  searchUser(searchTerm:string){

    let searchEndpoint= `https://api.github.com/search/users?access_token=${environment.akey}&q=${searchTerm}+repos:repos:%3E10`;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (userResults)=>{
            this.users=[];
            for(let i=0; i<userResults["items"].length; i++){
              let name =userResults["items"][i]["login"];
              let picture = userResults["items"][i]["avatar_url"];  
              let id = userResults["items"][i]["id"];
              let score = userResults["items"][i]["html_url"]; 
                              
              let user = new User(id,name,picture,score);
              this.users.push(user);              
            }
            console.log(this.users);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}