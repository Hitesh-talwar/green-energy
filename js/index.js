
function preload(){
  const imagesList = [ "./img/solarpanel.jpg",
                       "./img/oven.jpg",
                     "./img/heater.jpg"  ];

  const images = [];
  for ( let i=0; i < imagesList.length ; i++)
  {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  console.log('Images preloaded : \n\t ${images[0].src} \n\t ${images[1].src} \n\t ${images[2].src}');
};

window.addEventListener("load", preload );

var btnlist = document.querySelectorAll("button");

var obj = { solarpanel : { headingcont : 'Solar Panel' ,
                            bodytxt: "This is probably the most common and obvious method, if you're looking into renewable power. Solar panels typically go on your roof, although you can also install them in your yard. Depending on your latitude and the orientation of the panels, you could generate 10 or more watts per square foot. A typical house consumes at least a kilowatt of power, so a few square feet of solar panels should be enough to power most or all of your needs. Using solar energy means reducing your power consumption from grid that is your power company. So less consumption of grid from power means less use of non-renewable energy resources. This way you can help in saving environment too. Of course, one big weakness of solar power is that it only works when the sun is up. If you want to power your home when the sun is down, you'll need to pay for grid electricity or invest in a second type of renewable energy." ,
                            imgurl: './img/solarpanel.jpg' ,
                            imgAlt: 'Solar Panel'  } ,
            oven : { headingcont : 'Solar Oven' ,
                     bodytxt: "Perhaps it is not possilble for everyone to power their entire house with green energy. That's a big project. You can still power a part of you home with renewable energy by building a solar oven.Solar ovens actually use quite a bit of electricity. Using the sun to passively heat your food is a good way to get started in the world of renewable energy.Solar ovens work by trapping sunlight to heat food. You can buy a solar oven or build your own out of a few common materials.Solar ovens have several advantages, in that they heat your food for free, and they work even during a power outage or emergency. You'll never have to have a cold meal due to a lack of power.<br>You can bake, boil or steam any kind of food with the power of sun. No fuel needed at all. Besides that it's totally safe, no danger of fire." ,
                     imgurl: './img/oven.jpg' ,
                     imgAlt: 'Solar Oven'  } ,
            heater : { headingcont : 'Solar Heater' ,
                     bodytxt: "Heating water is very expensive as it requires a huge amount of energy. And fortunaltely, solar power doesn't just have to generate electricity. You can also use the power of the sun to heat your home. Solar water heaters use the heat of sunlight to heat the water in the reservoir which then can be trnsferred to your home's room heaters, showers, etc. This is method is cheaper and easier than installing solar panels. If you don't want to fully power your house with renewable resources, then this can be a better option. There are many different types of solar water heaters, each with their own advantages and disadvantages, so be sure to select the type of system that works best for you." ,
                     imgurl: './img/heater.jpg' ,
                     imgAlt: 'Solar Heater'  } ,
         }

  var ref = document.getElementsByClassName("content");

  btnlist[0].setAttribute("id","active");

  ref[0].innerHTML = `<h1>${obj.solarpanel.headingcont}</h1>
                      <img src ="${obj.solarpanel.imgurl}" alt="${obj.solarpanel.imgAlt}" style="width:350px; height:350px;">;
                      <p>${obj.solarpanel.bodytxt}</p>`;

  function contenthandler(e)
  {
    for ( let i =0; i< btnlist.length; i++)
    {
      if ( btnlist[i].hasAttribute("id") )
      {
        btnlist[i].removeAttribute("id");
      }
    }

      e.target.setAttribute("id","active");
    /*
       Use the element-object method setAttribute() to set the id active-button
       to the currently clicked button. */

    
    for (let i=0; i< btnlist.length; i++) {
      if ( btnlist[i].hasAttribute("id") ) {
        if (i==0)
        {
          ref[0].innerHTML = `<h1>${obj.solarpanel.headingcont}</h1>
                              <img src ="${obj.solarpanel.imgurl}" alt="${obj.solarpanel.imgAlt}">;
                              <p>${obj.solarpanel.bodytxt}</p>`;
        }
        if (i==1)
        {
          ref[0].innerHTML = `<h1>${obj.oven.headingcont}</h1>
                              <img src ="${obj.oven.imgurl}" alt="${obj.oven.imgAlt}" >;
                              <p>${obj.oven.bodytxt}</p>`;
        }
        if (i==2)
        {
          ref[0].innerHTML = `<h1>${obj.heater.headingcont}</h1>
                              <img src ="${obj.heater.imgurl}" alt="${obj.heater.imgAlt}" >;
                              <p>${obj.heater.bodytxt}</p>`;
        }
      }
    }

       /*
       Use conditional and event-object to check which button is clicked
       and based on that, create HTML with the data inside the backticks:
       `<h1>${headingContent}</h1>
        <img src="${imgUrl}" alt="${imgAlt}">
        <p>${bodyText}</p>`
       Assign this content to to your HTML-container that will
       be dynamically loaded (you already got the reference to
       this container before you started the function handleSelection) */
    
  }
  
  for (let i = 0; i < btnlist.length; i++) {
      btnlist[i].addEventListener("click", contenthandler);
  }
  window.addEventListener("click",contenthandler);
