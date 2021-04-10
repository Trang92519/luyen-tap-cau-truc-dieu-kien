let a=+prompt('Nhap bien a')
let b=+prompt('Nhap bien b')

if (a==0){
    if (b==0){
        alert('Phuong trinh vo so nghiem');
    }else {
        alert('Phuong trinh vo nghiem');
    }
}else {
    alert('Phuong trinh co nghiem la:'+-b/a)
};
