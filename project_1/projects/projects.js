//console.log('pink'); //works

const randomBackground = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


$(() => {
  //Modal
    const $opensModal = $('.open') //what makes modal open
    const $modal = $('#modal') //grabs the modal div
    const $closeModal = $('#close')


    const open = () => {
      $modal.css('display', 'block')
    }

    const close =  () => {
      $modal.css('display', 'none')
    }

    $opensModal.on('click', open)
    $closeModal.on('click', close)

  //background color
    const $background = $('.project').addClass('container')
    const color = randomBackground()
    $background.css('background-color', color)



})




//Try 1
// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Projects</title>
//     <link rel="stylesheet" href="projects.css">
//     <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
//     <script type="text/javascript" src="projects.js"></script>
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Radio+Canada&display=swap" rel="stylesheet">
//   </head>
//   <body>
//     <header>
//       <ul>
//         <li><a href="../home/home_page.html">Home</a></li>
//         <li><a href="../bio/bio_page.html">Bio</a></li>
//         <li><a href="../resume/resume_page.html">Resume</a></li>
//         <li><a href="projects_page.html">Projects</a></li>
//         <li><a href="../links/links_page.html">Links</a></li>
//       </ul>
//     </header>
//     <h1 id='title'>Projects</h1>
//     <div id='flexbox'>
//       <div class='project'>
//         <h4><a class="opens" href="#" target="_blank">Project 1</a></h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 2</a></h4>-->
//         <h4>Project 2</h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 3</a></h4>-->
//         <h4>Project 3</h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 4</a></h4>-->
//         <h4>Project 4</h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 5</a></h4>-->
//         <h4>Project 5</h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 6</a></h4>-->
//         <h4>Project 6</h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 7</a></h4>-->
//         <h4>Project 7</h4>
//       </div>
//       <div class='project' class="open">
//         <!--<h4><a class="open" href="#" target="_blank">Project 8</a></h4>-->
//         <h4>Project 8</h4>
//       </div>
//     </div>
//     <div id='modal'>
//       <h2>❗️❕❗️ Project coming soon! ❗️❕❗️</h2>
//       <div id='closer'>
//         <a id="close" href="#">Close</a>
//       </div>
//     </div>
//   </body>
// </html>
