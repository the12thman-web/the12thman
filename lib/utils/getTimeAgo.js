export const  getTimeAgo = (fromTime) => {
    console.log("fromTime:", fromTime)
    const currentTime = new Date();
    const timeDifferenceInSeconds = Math.floor((currentTime - fromTime) / 1000);
    console.log("timeDifferenceInSeconds:", timeDifferenceInSeconds)

    if (timeDifferenceInSeconds < 60) {
        return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < 3600) {
        const minutesAgo = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    } else {
        const hoursAgo = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    }
}