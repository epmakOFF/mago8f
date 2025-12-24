//Hook up the tweet display

$(document).ready(function() {
    const now = new Date();
    let targetDate = new Date();
    targetDate.setHours(18, 0, 0, 0);
    if (now > targetDate) {
        targetDate.setDate(targetDate.getDate() + 1);
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const day = targetDate.getDate();
    const month = months[targetDate.getMonth()];
    const year = targetDate.getFullYear();
    
    const dateString = `${day} ${month} ${year} 18:00:00`;
                           
    $(".countdown").countdown({
                date: dateString,
                format: "on"
            },
            
            function() {
                // callback function
            });


}); 

