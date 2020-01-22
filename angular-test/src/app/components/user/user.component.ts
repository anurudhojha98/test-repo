import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getGitHubUser()
  }
  panelOpenState = false;
  githubUsers:any=[];
  userRepoDetails:any=[];
  displayedColumns: string[] = ['name', 'fullName', 'description'];
  dataSource:any;
  getGitHubUser(){
    this.userService.getAllUser().subscribe(res => {
      if(res.length){
        this.githubUsers=res;
      }
        },(err)=>{
          console.error(err)
        });
  }
  clicked(val){
    this.userService.getUserRepos(val.repos_url).subscribe((res)=>{
   if(res){
     this.dataSource=res;
    this.userRepoDetails=res
    }
    },(err)=>{
      console.error(err)
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
