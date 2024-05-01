export default function Hero() {
   return (
    <div className="h-[100vh] w-[100vw] bg-img-hero bg-cover">
        <div className='text-medium-white font-bold text-xl pt-44 pl-4 pr-4 md:pr-0 md:pl-12 flex flex-col gap-6 '>
        <h1 className='text-5xl '>CITY INFORMATION MODELLING</h1>
        <p>ONDE A INOVAÇÃO E A TECNOLOGIA SE JUNTAM PARA MOLDAR O FUTURO URBANO!</p>
        <button className='bg-medium-white text-dark-blue text-sm md:text-xl md:w-96 h-16 rounded-3xl hover:scale-110 ease-in-out transition'>SAIBA MAIS SOBRE O PROJETO AQUI!</button>
        </div>
      </div>
   )
}