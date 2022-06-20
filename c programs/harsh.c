/*#include<stdio.h>
void main(){
int a,b,c;
scanf("%d",&a);
scanf("%d",&b);
scanf("%d",&c);
if(a<=20 && a>=10){
  if(a!=13 || a!=17){
    a=0;
  }
}
if(b<=20 && b>=10){
  if(b!=13 || b!=17){
    b=0;
  }
  }
if(c<=20 && c>=10){
  if(c!=13 || c!=17){
    c=0;
  }
}
printf("sum of %d+ %d + %d = %d ",a,b,c,a+b+c);
}

#include<stdio.h>


void main(){
int a,b,an,bn;
scanf("%d",&a);
scanf("%d",&b);
if(a<0 || b<0)
    return ;
if(a>13){
    an=a-13;
}else if(a<13){
   an= 13-a;
}else{
  an=a;
}

if(b>13){
    bn=b-13;
}else if(b<13){
   bn= 13-b;
}else{
  an=a;
}

if (an>bn){
    printf("%d is closest to 13",b);
}else{
printf("%d is closest to 13",a);
}


}


#include<stdio.h>
void main(){
int n=5,c=5,i,j;

for(i=0;i<n;i++){

 for(j=0; j<5;j++){
    if(i==0 || j==0 || i==n-1|| j==n-1){
        printf("*");
    }else{
    printf(" ");
    }
 }
 printf("\n");
}

}
#include<stdio.h>

void main(){
int a[5]={1,2,3,4,5};
int b[5],i;

for(i=0;i<5;i++){
    b[i]=a[4-i];
    printf("%d",b[i]);
}
}
//not working
#include<stdio.h>

void main(){
int a[5]={1,2,3,4,5};
int b[5],i;

for(i=0;i<5;i++){
  //  b[i]=a[4-i];
  a[i]=a[4-i];
    printf("%d",a[i]);
}
}
*/















