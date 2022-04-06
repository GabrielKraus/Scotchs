import logo from '../../assets/logo.png'
import "./sobrenosotros.css"

const SobreNosotros = () =>{

    return(
        <div className='about'>
            <div className='aboutLogo'>
                <img alt='logo' src={logo}/>
                <h2>Sobre Nosotros</h2>
            </div>

            <div className='aboutPartOne'>
                <div className='aboutPartOneLicoreria aboutPartOneItem aboutPartOneSide'>
                    <h3>Licoreria</h3>
                    <p>Nuestro extenso catalogo de bebidas que tenemos para ofrecerte, es perfecto para todo tipo de amante de las bebidas y para aquellos que se quieran iniciar en el mundo de la cata de un buen Whisky. Tenemos una diversa variedad de precios para todos los consumidores y una linea de productos destacada del resto del mercado.</p>
                </div>
                <div className='aboutPartOneBrand aboutPartOneItem'>
                    <h2>Scotch's</h2>
                    
                </div>
                <div className='aboutPartOneTabaqueria aboutPartOneItem aboutPartOneSide'>
                    <h3>Tabaqueria</h3>
                    <p>Nuestra selección de tabacos es perfecta para todos aquellos que les guste disfrutar de un tabaco de calidad a un excelente precio y para aquellos que quieren lo mejor del mercado. Nuestra amplia gama de tabacos, ya sea para armar, pipa o tabacos nacionales e importados, ofrecen a nuestros clientes un catalogo que se ajusta exactamente a los gustos individuales de cada uno.</p>
                </div>
            </div>
        </div>
    )
}

export default SobreNosotros