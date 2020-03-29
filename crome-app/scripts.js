let changeAvatarElement = (imgLink) => {
    let avatarImg = document.querySelector('#profile_photo_link > img');
    avatarImg.src = imgLink;
}

const newPhotoSrc = 'https://imageup.ru/img282/3580110/fake_ava.jpg';
const interval = 1000;

setInterval(() => {
    changeAvatarElement(newPhotoSrc);
}, interval);