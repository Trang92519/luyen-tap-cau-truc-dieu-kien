let a =+prompt('nhap he so a')
let b=+prompt('nhap he so b')
let c=+prompt('nhap he so c')
P=b*b-4*a*c;
if (a==0){
    alert('khong phai phuong trinh bac 2');
}else if (a!=0){
    if (P<0){
        alert('Phuong trinh vo nghiem');
    }else if (P==0){
        alert('Phuong trinh co nghiem la:'+ -b/(2*a)+-b/(2*a));
    }else if (P>0){
        alert('Phuong trinh co nghiem la:'+ (-b+Math.sqrt(P))/2/a+ (-b-Math.sqrt(P))/2/a)
    }
}
