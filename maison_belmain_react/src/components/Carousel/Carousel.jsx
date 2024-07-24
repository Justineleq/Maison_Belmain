
export default function Carousel()
{

    return(
        <div id="carouselExampleIndicators" classList="carousel slide">
            <div classListList="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" classList="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div classList="carousel-inner">
                {/* <div classList="carousel-item active">
                <img src={} classList="d-block w-100" alt="...">
                </div>
                <div classList="carousel-item">
                <img src="..." classList="d-block w-100" alt="...">
                </div>
                <div classList="carousel-item">
                <img src="..." classList="d-block w-100" alt="...">
                </div> */}
            </div>
            <button classList="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span classList="carousel-control-prev-icon" aria-hidden="true"></span>
                <span classList="visually-hidden">Previous</span>
            </button>
            <button classList="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span classList="carousel-control-next-icon" aria-hidden="true"></span>
                <span classList="visually-hidden">Next</span>
            </button>
        </div>
    );

}