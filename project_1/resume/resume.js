//console.log('purple'); //works
//jQuery for resume (only the header is HTML)



$(() => {
  //------------ header ---------------//


//This site helped me figure out media querys for jquery (File Name - custom.js section): https://codingstatus.com/how-to-add-media-query-in-jquery/

function responsive($minWidth) {
  if ($minWidth.matches) {
    /*------------------------------------------------- Normal Size ------------------------------------------------- */
    //takes away normal sizing
    $('#header_media').remove()
    $('#mainbox_media').remove()

    //create
    const $header = $('<header>').attr('id', 'header_normal') //header
    const $ul = $('<ul>') //ul
    const $lihome = $('<li>').addClass('li') //home li
    const $libio = $('<li>').addClass('li') //bio li
    const $liresume = $('<li>').addClass('li') //resume li
    const $liprojects = $('<li>').addClass('li') //projects li
    const $lilinks = $('<li>').addClass('li') //links li

    const $ahome = $('<a>').attr('href', '../home/home_page.html').text('Home').addClass('a').attr('id', '1') //Home a
    const $abio = $('<a>').attr('href', '../bio/bio_page.html').text('Bio').addClass('a').attr('id', '2') //Bio a
    const $aresume = $('<a>').attr('href', 'resume_page.html').text('Resume').addClass('a').attr('id', '3') //Resume
    const $aprojects = $('<a>').attr('href', '../projects/projects_page.html').text('Project').addClass('a').attr('id', '4') //Projects a
    const $alinks = $('<a>').attr('href', '../links/links_page.html').text('Links').addClass('a').attr('id', '5') //Links a

    const $hoverFunction1 = () => {
      $('#1').css('font-weight', 'bold')
    }
    const $nohoverFunction1 = () => {
      $('#1').css('font-weight', 'normal')
    }
    const $hoverFunction2 = () => {
      $('#2').css('font-weight', 'bold')
    }
    const $nohoverFunction2 = () => {
      $('#2').css('font-weight', 'normal')
    }
    const $hoverFunction3 = () => {
      $('#3').css('font-weight', 'bold')
    }
    const $nohoverFunction3 = () => {
      $('#3').css('font-weight', 'normal')
    }
    const $hoverFunction4 = () => {
      $('#4').css('font-weight', 'bold')
    }
    const $nohoverFunction4 = () => {
      $('#4').css('font-weight', 'normal')
    }
    const $hoverFunction5 = () => {
      $('#5').css('font-weight', 'bold')
    }
    const $nohoverFunction5 = () => {
      $('#5').css('font-weight', 'normal')
    }


    //append
    $('body').append($header) //header to body
    $header.append($ul) //ul to header
    $ul.append($lihome, $libio, $liresume, $liprojects, $lilinks) //lis to ul
    $lihome.append($ahome) //a to home
    $libio.append($abio) //a to bio
    $liresume.append($aresume) //a to link
    $liprojects.append($aprojects) //a to project
    $lilinks.append($alinks) //a to links


    //css
    $header.css('background', 'linear-gradient(0.50turn, #202020, #303030, #202020)').css('width', '100%').css('top', '0px').css('left', '0px').css('position', 'absolute').css('text-align', 'center').css('padding', '0.5% 0%').css('box-shadow', '0 7px 10px rgba(0,0,0,0.4)').css('border-radius', '3px') //header

    $ul.css('list-style', 'none').css('width', '100%').css('padding-left', '0px') //ul

    $('.li').css('display', 'inline-block').css('margin', 'auto').css('padding', '0% 5%').css('font-size', '20px').css('font-family', "'Radio Canada', sans-serif") //li

    $('.a').css('text-decoration', 'none').css('color', '#101010').css('text-shadow', '2px 1px 4px #B8B8B8') //a

    $('#1').hover($hoverFunction1, $nohoverFunction1)
    $('#2').hover($hoverFunction2, $nohoverFunction2)
    $('#3').hover($hoverFunction3, $nohoverFunction3)
    $('#4').hover($hoverFunction4, $nohoverFunction4)
    $('#5').hover($hoverFunction5, $nohoverFunction5)
    //this helped me figure out how to make it bold: https://www.w3schools.com/jquery/event_hover.asp

    //----------------------------------//


    //------------ Body ---------------//
    //create
    const $resumeDiv = $('<div>').attr('id', 'mainbox_normal') //makes mainbox div
    const $reasumeheader = $("<h1>").attr('id', 'title').text('Resume') //makes resume h1
    const $image = $("<img>").attr('src', 'https://pilbox.themuse.com/image.png?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F39916%2Fdf5083e7-325e-4174-a62e-611bbda7f9ff.png%3Fv%3D8ffe118e4639f69c5a85c9117d92640a81ffaa9942d639598f9f8e03030d4341&prog=1&w=780').attr('id', 'image') //makes image
    //image from: https://www.themuse.com/advice/top-google-docs-resume-templates-how-to-use-them
    //image link: https://pilbox.themuse.com/image.png?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F39916%2Fdf5083e7-325e-4174-a62e-611bbda7f9ff.png%3Fv%3D8ffe118e4639f69c5a85c9117d92640a81ffaa9942d639598f9f8e03030d4341&prog=1&w=780


    //append
    $('body').append($resumeDiv) //puts mainbox div in body
    $resumeDiv.append($reasumeheader) //puts h1 in div
    $resumeDiv.append($image) //puts image in div


    //css
    $resumeDiv.css('margin-top', '5%') //makes div start below header
    $reasumeheader.css('text-align', 'left').css('font-size', '3em').css('background-color', '#AD89D9').css('margin-left', '2%').css('margin-top', '6.5%') //h1
    $('body').css('background-color', '#AD89D9') //body
    $image.css('margin-left', '22.5%').css('margin-right', '22.5%').css('width', '55%') //image
    //---------------------------------//

    //Window Alert
      //setTimeout(function() {alert('This is not my actual resume'); }, 300);
      //This helped me figure out the widow alert: https://stackoverflow.com/questions/34336976/can-i-delay-an-alert-in-jquery

    const windowAlert = () => {
      window.alert('This is not my actual resume')
    }

    $('img').on('click', windowAlert)


    /*------------------------------------------------- Media Size ------------------------------------------------- */
  } else {
    //takes away normal sizing
    $('#header_normal').remove()
    $('#mainbox_normal').remove()


    //create
    const $header = $('<header>').attr('id', 'header_media') //header
    const $ul = $('<ul>') //ul
    const $lihome = $('<li>').addClass('li') //home li
    const $libio = $('<li>').addClass('li') //bio li
    const $liresume = $('<li>').addClass('li') //resume li
    const $liprojects = $('<li>').addClass('li') //projects li
    const $lilinks = $('<li>').addClass('li') //links li

    const $ahome = $('<a>').attr('href', '../home/home_page.html').text('Home').addClass('a').attr('id', '1') //Home a
    const $abio = $('<a>').attr('href', '../bio/bio_page.html').text('Bio').addClass('a').attr('id', '2') //Bio a
    const $aresume = $('<a>').attr('href', 'resume_page.html').text('Resume').addClass('a').attr('id', '3') //Resume
    const $aprojects = $('<a>').attr('href', '../projects/projects_page.html').text('Project').addClass('a').attr('id', '4') //Projects a
    const $alinks = $('<a>').attr('href', '../links/links_page.html').text('Links').addClass('a').attr('id', '5') //Links a

    const $hoverFunction1 = () => {
      $('#1').css('font-weight', 'bold')
    }
    const $nohoverFunction1 = () => {
      $('#1').css('font-weight', 'normal')
    }
    const $hoverFunction2 = () => {
      $('#2').css('font-weight', 'bold')
    }
    const $nohoverFunction2 = () => {
      $('#2').css('font-weight', 'normal')
    }
    const $hoverFunction3 = () => {
      $('#3').css('font-weight', 'bold')
    }
    const $nohoverFunction3 = () => {
      $('#3').css('font-weight', 'normal')
    }
    const $hoverFunction4 = () => {
      $('#4').css('font-weight', 'bold')
    }
    const $nohoverFunction4 = () => {
      $('#4').css('font-weight', 'normal')
    }
    const $hoverFunction5 = () => {
      $('#5').css('font-weight', 'bold')
    }
    const $nohoverFunction5 = () => {
      $('#5').css('font-weight', 'normal')
    }


    //append
    $('body').append($header) //header to body
    $header.append($ul) //ul to header
    $ul.append($lihome, $libio, $liresume, $liprojects, $lilinks) //lis to ul
    $lihome.append($ahome) //a to home
    $libio.append($abio) //a to bio
    $liresume.append($aresume) //a to link
    $liprojects.append($aprojects) //a to project
    $lilinks.append($alinks) //a to links


    //css
    $header.css('background', 'linear-gradient(0.50turn, #202020, #303030, #202020)').css('width', '100%').css('top', '0px').css('left', '0px').css('position', 'absolute').css('text-align', 'center').css('padding', '0.5% 0%').css('box-shadow', '0 7px 10px rgba(0,0,0,0.4)').css('border-radius', '3px') //header

    $ul.css('list-style', 'none').css('width', '100%').css('padding-left', '0px') //ul

    $('.li').css('display', 'inline-block').css('margin', 'auto').css('padding', '0% 3%').css('font-size', '15px').css('font-family', "'Radio Canada', sans-serif") //li

    $('.a').css('text-decoration', 'none').css('color', '#101010').css('text-shadow', '2px 1px 4px #B8B8B8') //a

    $('#1').hover($hoverFunction1, $nohoverFunction1)
    $('#2').hover($hoverFunction2, $nohoverFunction2)
    $('#3').hover($hoverFunction3, $nohoverFunction3)
    $('#4').hover($hoverFunction4, $nohoverFunction4)
    $('#5').hover($hoverFunction5, $nohoverFunction5)
    //this helped me figure out how to make it bold: https://www.w3schools.com/jquery/event_hover.asp

    //----------------------------------//


    //------------ Body ---------------//
    //create
    const $resumeDiv = $('<div>').attr('id', 'mainbox_media') //makes mainbox div
    const $reasumeheader = $("<h1>").attr('id', 'title').text('Resume') //makes resume h1
    const $image = $("<img>").attr('src', 'https://pilbox.themuse.com/image.png?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F39916%2Fdf5083e7-325e-4174-a62e-611bbda7f9ff.png%3Fv%3D8ffe118e4639f69c5a85c9117d92640a81ffaa9942d639598f9f8e03030d4341&prog=1&w=780').attr('id', 'image') //makes image
    //image from: https://www.themuse.com/advice/top-google-docs-resume-templates-how-to-use-them
    //image link: https://pilbox.themuse.com/image.png?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F39916%2Fdf5083e7-325e-4174-a62e-611bbda7f9ff.png%3Fv%3D8ffe118e4639f69c5a85c9117d92640a81ffaa9942d639598f9f8e03030d4341&prog=1&w=780


    //append
    $('body').append($resumeDiv) //puts mainbox div in body
    $resumeDiv.append($reasumeheader) //puts h1 in div
    $resumeDiv.append($image) //puts image in div


    //css
    $resumeDiv.css('margin-top', '20%') //makes div start below header
    $reasumeheader.css('text-align', 'left').css('font-size', '2.5em').css('background-color', '#AD89D9').css('margin-left', '2%').css('margin-top', '6.5%').css('margin-bottom', '2%') //h1
    $('body').css('background-color', '#AD89D9') //body
    $image.css('margin-left', '2.5%').css('width', '95%') //image  //.css('margin-left', '5%').css('margin-right', '5%')
    //---------------------------------//

    //Window Alert
      //setTimeout(function() {alert('This is not my actual resume'); }, 300);
      //This helped me figure out the widow alert: https://stackoverflow.com/questions/34336976/can-i-delay-an-alert-in-jquery

    const windowAlert = () => {
      window.alert('This is not my actual resume')
    }

    $('img').on('click', windowAlert)
  }
}

//sets minWidth for function
const $minWidth = window.matchMedia('(min-width: 900px)')
responsive($minWidth)
$minWidth.addListener(responsive)


});
