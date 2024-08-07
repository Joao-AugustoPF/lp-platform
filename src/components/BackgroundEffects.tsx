function BackgroundEffects() {
  return (
    <>
      {/* Primeiro Span - Efeito Indigo */}
      <span className="fixed blur-[150px] md:blur-[200px] lg:w-[500px] md:w-[400px] w-[200px] lg:h-[500px] md:h-[400px] h-[300px] rounded-full top-[10%] md:left-[10%] left-10 bg-indigo-600/20"></span>

      {/* Segundo Span - Efeito Vermelho */}
      <span className="fixed blur-[150px] md:blur-[200px] lg:w-[500px] md:w-[400px] w-[200px] lg:h-[500px] md:h-[400px] h-[300px] rounded-full bottom-[10%] md:right-[10%] right-10 bg-red-600/20"></span>
    </>
  );
}

export default BackgroundEffects;
