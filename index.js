async function get_profiles() {
  const request = await fetch("profiles.json");
  const response = await request.json();

  return response;
}

const people = get_profiles();
let data = [
  {
    first_name: "Hyman",
    last_name: "MacCahey",
    email: "hmaccahey0@cdbaby.com",
    gender: "Male",
    image: "./images/cabinet.jpg",
  },
  {
    first_name: "Dominique",
    last_name: "Raw",
    email: "draw1@mozilla.com",
    gender: "Male",
    image: "./images/cabinet2.jpg",
  },
  {
    first_name: "Tootsie",
    last_name: "Stappard",
    email: "tstappard2@xinhuanet.com",
    gender: "Female",
    image: "./images/IMG_0665.jpg",
  },
  {
    first_name: "Ferrell",
    last_name: "Giacopello",
    email: "fgiacopello3@addtoany.com",
    gender: "Male",
    image: "./images/IMG_0666.jpg",
  },
  {
    first_name: "Iolande",
    last_name: "Lelliott",
    email: "ilelliott4@examiner.com",
    gender: "Female",
    image: "./images/IMG_0663.jpg",
  },
  {
    first_name: "Petronella",
    last_name: "Swan",
    email: "pswan5@nbcnews.com",
    gender: "Female",
    image: "./images/IMG_0667.jpg",
  },
  {
    first_name: "Jillian",
    last_name: "Tinston",
    email: "jtinston6@nifty.com",
    gender: "Female",
    image: "./images/IMG_0669.jpg",
  },
  {
    first_name: "Sindee",
    last_name: "Slyman",
    email: "sslyman7@ovh.net",
    gender: "Female",
    image: "./images/IMG_0670.jpg",
  },
  {
    first_name: "Washington",
    last_name: "Gadsby",
    email: "wgadsby8@netscape.com",
    gender: "Male",
    image: "./images/server.jpg",
  },
  {
    first_name: "Adoree",
    last_name: "Nangle",
    email: "anangle9@businessinsider.com",
    gender: "Female",
    image: "./images/IMG_0670.jpg",
  },
  {
    first_name: "Elwyn",
    last_name: "Hoonahan",
    email: "ehoonahana@e-recht24.de",
    gender: "Male",
    image: "./images/IMG_0666.jpg",
  },
  {
    first_name: "Eden",
    last_name: "Saffer",
    email: "esafferb@rambler.ru",
    gender: "Bigender",
    image: "./images/IMG_0667.jpg",
  },
  {
    first_name: "Ulrikaumeko",
    last_name: "Birtwhistle",
    email: "ubirtwhistlec@t-online.de",
    gender: "Female",
    image: "./images/IMG_0669.jpg",
  },
  {
    first_name: "Orville",
    last_name: "Ward",
    email: "owardd@hao123.com",
    gender: "Male",
    image: "./images/me.jpg",
  },
  {
    first_name: "Fenelia",
    last_name: "Dummigan",
    email: "fdummigane@myspace.com",
    gender: "Female",
    image: "./images/IMG_0322.jpg",
  },
  {
    first_name: "Wakefield",
    last_name: "McQuilty",
    email: "wmcquiltyf@nps.gov",
    gender: "Male",
    image: "./images/IMG_0325.jpg",
  },
  {
    first_name: "Obadiah",
    last_name: "Quelch",
    email: "oquelchg@livejournal.com",
    gender: "Agender",
    image: "./images/IMG_0317.jpg",
  },
  {
    first_name: "Kellby",
    last_name: "Womersley",
    email: "kwomersleyh@e-recht24.de",
    gender: "Male",
    image: "./images/IMG_0663.jpg",
  },
  {
    first_name: "Inger",
    last_name: "Meader",
    email: "imeaderi@surveymonkey.com",
    gender: "Female",
    image: "./images/IMG_0665.jpg",
  },
  {
    first_name: "Wynnie",
    last_name: "Whitbread",
    email: "wwhitbreadj@skyrock.com",
    gender: "Female",
    image: "./images/IMG_0668.jpg",
  },
];

const profiles = scroll_profile(data);

document.getElementById("btn_scroller").addEventListener("click", call_profile);

function scroll_profile(data) {
  let next_index = 0;
  return {
    next: function () {
      return next_index < data.length
        ? {
            value: data[next_index++],
            done: false,
          }
        : { done: true };
    },
  };
}

function call_profile() {
  const profile = profiles.next().value;
  if (profile !== undefined) {
    // console.log(profile);
    document.getElementById("profile").innerHTML = `

    <div class="row">
      <div class="col-md-4">
        <img src="${profile.image}" class ="mx-auto rounded img-fluid m-2" width="200" />
      </div>
      
      <div class="col-md-8">
        <ul class="list-group">
          <li class="list-group-item">First name: ${profile.first_name}</li>
          <li class="list-group-item">Last name: ${profile.last_name}</li>
          <li class="list-group-item">Gender: ${profile.gender}</li>
          <li class="list-group-item">Email: <a href="mailto:${profile.email}">${profile.email}</a></li>
        </ul>
      </div> 
    </div>
      `;
  } else {
    window.location.reload();
  }
}
call_profile();
