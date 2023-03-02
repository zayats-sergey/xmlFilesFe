import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FOTO, POSTACOMMENT } from '../data/postAmount.data';
import { PostAcommentFoto, PostAcommentModel, selecTypeCode } from '../models/postAmount.model';
import { PostAcommentService } from '../services/post-acomment.service';

@Component({
  selector: 'app-post-acomment',
  templateUrl: './post-acomment.component.html',
  styleUrls: ['./post-acomment.component.css']
})
export class PostAcommentComponent implements OnInit {
  // @Input() selecTypeCode: selecTypeCode = false;
  // postcomment: PostAcommentModel[] = POSTACOMMENT;
  
  constructor(
    private postAcommentSetvice: PostAcommentService,
    private flashMessages: FlashMessagesService,
  ) { }

  ngOnInit(): void {
    this.initAllPosts();
  }

  // profileForm = new FormGroup({
  //   editedDescription: new FormControl(''),
  // })

  // selectedPostAcomment(event: any, post: any){
  //   this.postcomment.find((p)=>{
  //     if(p.choose === true){
  //       console.log(p.choose);
  //       return (p.choose = false)
  //     }return
  //   });
  //   this.profileForm.setValue({
  //     editedDescription: post.description
  //   });
  //   this.postcomment.find((p)=>{
  //     if(p.id === post.id){
  //       return p.choose = true
  //     } return 
  //   });
  // }

  // mergePostAcomment(event: any, post: any){
  //   post.description = this.profileForm.get('editedDescription')?.value
  //   delete post.choose
  // }


  previewFoto: PostAcommentFoto = FOTO;
  previewFoto1: string = '';
  jobForm = new FormGroup({
      serName: new FormControl(''),
      post: new FormControl(''),
      foto: new FormControl(''),
      // foto: new FormControl(this.previewFoto1),
  })

  preview: string = '';
  previewPost: string = '';
  previewSerName: string = '';
  
  postArr: any[] = [];
  save() {
    this.postArr = [];
    console.log(this.previewFoto1);
    console.log(this.jobForm.value);
    this.preview = JSON.stringify(this.jobForm.value);
    // this.preview = this.jobForm.value.firstName + this.jobForm.value.lastName 
    this.previewSerName = this.jobForm.value.serName;
    this.previewPost = this.jobForm.value.post;
    this.previewFoto1 = this.jobForm.value.foto;
 
    if(this.previewSerName === ''){
      this.flashMessages.show('PreviewSerName not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return;
    }
    if(this.previewPost === ''){
      this.flashMessages.show('PreviewPost not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return;
    }

    if(this.previewPost !== '' && this.previewSerName !== '' && this.previewPost !== null && this.previewSerName !== null){
      this.postArr = [...this.postArr, this.previewFoto1, this.previewSerName,this.previewPost];
      console.log(this.postArr);
      this.postAcommentSetvice
        .addPost(this.postArr)
        .subscribe((res)=>{
          console.log(res);
          if(!res.createdAt){
            this.flashMessages.show('Post not added',{
              cssClass: 'alert-danger',
              timeout : 2000,
            })
        }else{
          this.flashMessages.show('added Post success!!!!',{
            cssClass: 'alert-success',
            timeout : 2000,
          })
        };
       })
    }
    this.jobForm = new FormGroup({
      serName: new FormControl(null),
      post: new FormControl(null),
      foto: new FormControl(null),
  })
  }

  allPosts: any;
  searchAllPosts(){
    this.postAcommentSetvice
      .getAllPosts()
      .subscribe((res)=>{
        console.log(res);
        localStorage.setItem('postsArr', JSON.stringify(res));
        let newPostsArr = localStorage.getItem('postsArr');
        this.allPosts = newPostsArr !== null ? JSON.parse(newPostsArr) : null;
        console.log(this.allPosts);
        // this.allPosts = res;

      })
  }

  initAllPosts(){
    let newPostsArr = localStorage.getItem('postsArr');
    this.allPosts = newPostsArr !== null ? JSON.parse(newPostsArr) : null;
    console.log(this.allPosts);
  }



}


