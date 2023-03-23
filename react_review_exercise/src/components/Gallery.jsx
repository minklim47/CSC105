import '../styles/Gallery.css'

function Gallery(){
    return (
        <section className='Gallery'>
            <h2>Gallery</h2>
            <ul>
                {/* <li><img src={pic} width={200}/></li> */}
                <li><img src="https://f.ptcdn.info/704/064/000/ptrfzd7zi5U2tB2vM8ou-o.jpg" width={200}/></li>
                <li><img src="https://f.ptcdn.info/704/064/000/ptrfzd7zi5U2tB2vM8ou-o.jpg" width={200}/></li>
                <li><img src="https://f.ptcdn.info/704/064/000/ptrfzd7zi5U2tB2vM8ou-o.jpg" width={200}/></li>
            </ul>
        </section>
    )
}

export default Gallery