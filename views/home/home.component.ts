import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { UploadService } from 'src/app/services/upload.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   progress = 0;
   selectedFiles: FileList;
   file:any;
   vis:boolean;
  constructor(private uploadService: UploadService,private http: HttpClient) { }

  ngOnInit(): void {
    this.vis = true
  }

  interval(timeToWait:number):Observable<number>
  {
    return timer(0, timeToWait)
      .pipe(
        takeWhile(() => this.progress <= 100),
        map(()=>this.progress<100?this.progress:100),
        tap(() => (this.progress += 10))
      )
  }

  upload() {
    this.progress=0;
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
    // this.http.post('http://ec2-18-117-151-130.us-east-2.compute.amazonaws.com:3000/upload',JSON.stringify(fileData))
    //         .subscribe((response) => {
    //             console.log('response received is ', response);
    //         })
    this.interval(6000).subscribe((res) => {
      console.log(res);
      if(res==100){
        this.http.get('http://ec2-18-117-151-130.us-east-2.compute.amazonaws.com:3000/retrieve').subscribe((response:any) => {
          this.file = response.data;
          this.vis = false;
          console.log('response received is ', response.data);});

      }
    });
    }


    selectFile(event:any) {
    this.selectedFiles = event.target.files;
    }


}
