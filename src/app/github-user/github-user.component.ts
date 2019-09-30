import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { RepoHttpService} from '../repo-http.service';
import { UserHttpService} from '../user-http.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
repositories: Repository[];
  users: User[];
  
  constructor(public repoHttpService:RepoHttpService, public userHttpService:UserHttpService) { }

    ngOnInit() {
        this.search("Leon");
        
    }

    search(searchTerm){
    this.userHttpService.searchUser(searchTerm).then(
        ()=>{
            this.users=this.userHttpService.users;  
            
        },
        (error)=>{
            console.log(error)      
        }

    )
    this.repoHttpService.searchRepo(searchTerm).then(
        ()=>{
            this.repositories=this.repoHttpService.repositories;
            
        },
        (error)=>{
            console.log(error)
        }
    )
    }

     

}

