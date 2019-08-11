$( document ).ready(function() {
    $.getJSON( "data/projects.json", function( data ) {
        var projects = data.projects;
        $.each( projects, function( i ) {
            var newArt = $("<article>");
            newArt.addClass("card").addClass(this.major_skill);
            newArt.append("<div class='image' style='background-image: url(assets/images/"+this.img+")'>");
            var newSnap = $("<div>");
            newSnap.addClass("snapshot");
            newSnap.append("<h2 class='light'>"+this.title+"</h2>");
            newSnap.append("<p class='light'>"+this.short_desc+"</p>");
            newSnap.append("<a class='light' href='#'>More -></a> ");
            newArt.append(newSnap);           
            var skillBlock = $("<div class='skillBlock'></div>")
            $.each(this.skills, function(e){
                skillBlock.append("<div class='skill "+this+"'>"+this.charAt(0)+"</div>");
                console.log(this);
            })
            newArt.append(skillBlock);
            $("#main").append(newArt);
        });
    }); 
});

// ^^JQuery
// Handlebars

{{#each projects}}
    <article class="card {{major_skill}}">
        <div class="image" style="background-image:"{{img}}></div>
        <div class="snapshot">
            <h2 class="light">{{title}}}</h2>
            <p class="light">{{short_desc}}}</p>
            <a class="light" href="#">More -&gt;</a> </div><div class="skillBlock">
            {{#each skills}}
                <div class="skill {{skill}}">j</div>
            {{/skills}}
        </div>
    </article>
{{/each}}
/*

var newArt = $("<article>");
    newArt.addClass("card");
    $("#main").append(newArt);
    console.log("were' in the wrong spot");


<article class="card">
<div class="image" style="background-image: url(assets/images/smalltest.jpg)">
</div>  
<div class="snapshot">
    <h2 class="light">Article Title</h2>
    <p class="light">This is a sample description for the project.</p>   
    <a class="light" href="#">More -></a>                         
</div>


</article>
*/