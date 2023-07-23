export const getTimeAgo = (fromTime) => {
    const currentTime = new Date();
    const timeDifferenceInSeconds = Math.floor((currentTime - fromTime) / 1000);

    if (timeDifferenceInSeconds < 60) {
        return `${timeDifferenceInSeconds} second${timeDifferenceInSeconds !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 3600) {
        const minutesAgo = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
        const hoursAgo = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 2592000) {
        const daysAgo = Math.floor(timeDifferenceInSeconds / 86400);
        return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 31536000) {
        const monthsAgo = Math.floor(timeDifferenceInSeconds / 2592000);
        return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
    } else {
        const yearsAgo = Math.floor(timeDifferenceInSeconds / 31536000);
        return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
    }
}
