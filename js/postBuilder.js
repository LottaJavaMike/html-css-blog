var blogPost = {
    "articles" : [
        {
            "title" : "A new home for the site",
            "date" : "March 3, 2016",
            "body" : "Moved the site to a new home.  It is really a great place because I can keep messing with the front end stuff and refresh the unix skillset all at the same time.  I've put things up at my free unix shell account over on sdf.org.  I have to still get DNS updated, but the site is currently available at http://mike.shea.sdf.org/ , and if you have any interest in learning about Linux/Unix, you should check this place out."
        },
        {
            "title" : "Javascript generating HTML",
            "date" : "February 27, 2016",
            "body" : "So now I have javascript set to generate the HTML that displays each post. Instead of each article being written directly into the index.html, I put it into my postBuilder.js file in JSON format. Still not the most efficient way of doing things, but a lot better than ending up with a massive html file."
        },
        {
            "title" : "Writing Posts",
            "date" : "February 24, 2016",
            "body" : "Woohoo! The second post of the new site! Unfortunately, both posts are hand coded directly in the html file. Not exactly the most efficient way of doing thigs. It will get a lot more complicated as more posts get added. So the thought is that I use javascript and a JSON formatted file to populate the posts. The javascript will read the entries in the json file and generate the html needed to display the posts. I should probably add that right now, i'm editing the html file, updating the respository on github and then uploading the html file up to the webserver."
        },
        {
            "title" : "Things to come...",
            "date" : "February 21, 2016",
            "body" : "This will be the new blog for Contemplating Tech. Although a sandbox for me to continue learning about web development (read: it'll change frequently), I will occasionally post things I come across in the tech world along with neat things I learn about development along the way."
        }
    ]
};
/*var formattedStart = HTMLpostStart;
$("#posts").append(HTMLpostStart);*/

blogPost.display = function() {
    for (article in blogPost.articles){
        //$("#posts").append(HTMLpostStart);
        
        var formattedTitle = HTMLpostTitle.replace("%data%", blogPost.articles[article].title);
        $("#posts").append(formattedTitle);
        
        var formattedDate = HTMLpostDate.replace("%data%", blogPost.articles[article].date);
        $("#posts").append(formattedDate);
        
        var formattedBody = HTMLpostBody.replace("%data%", blogPost.articles[article].body);
        $("#posts").append(formattedBody);
    }
};

blogPost.display();

/*
var formattedTitle = HTMLpostTitle.replace("%data%",post.title);
$("#posts").append(formattedTitle);

var formattedDate = HTMLpostDate.replace("%data%",post.date);
$("#posts").append(formattedDate);

var formattedBody = HTMLpostBody.replace("%data%",post.body);
$("#posts").append(formattedBody);
*/
