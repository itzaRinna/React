import React from 'react';

function ProfilePicture() {
    const imageUrl = './src/assets/profile.jpeg';

    const handleClick = (e) => {
        e.target.style.display = "none";
    };

    return (
        <img onClick={handleClick} src={imageUrl} alt="Profile"></img>
    );
}

export default ProfilePicture;
