import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  uploadFile(file:any) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIARSUFL2WIH7WCCBOD',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'transcribe-input79',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err:any, data:any) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
    }
}
