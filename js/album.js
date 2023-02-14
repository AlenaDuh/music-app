let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
let album = albums[i];


if(!album){
    container.innerHTML='Ошибка 5 сек'
    setTimeout(() => {
        window.location.pathname = `index.html`
    }, 5000);

    
}else{
    container.innerHTML=`
                    <div class="card md-3">
                        <div class="row">
                            <div class="col-4">
                                <img src="${album.img}" alt="" class="img-fluid ruunded-start">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">${album.title}</h5>
                                    <p class="card-text">${album.description}</p>
                                    <p class="card-text"><small class="text-muted">${album.year}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
    `

    let tracks = album.tracks;

    for(let i=0; i< tracks.length; i++){
        let track = tracks[i]
        playlist.innerHTML+=`
                        <li class="list-group-item d-flex align-items-center playlist">
                            <img src="assets/playy.png" alt="" height="30px" class="me-3">
                            <div>
                                <div>${track.title}</div>
                                <div>${track.autor}</div>
                                <div class="ms-auto">${track.time}</div>
                            </div>
                        </li>
        `
    } 
}