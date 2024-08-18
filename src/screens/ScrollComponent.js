// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/ScrollComponent.css'; // Arquivo CSS para animações
// import HomeScreen from './HomeScreen';

// const ScrollAnimation = () => {
//   const [isScrolled, setIsScrolled] = useState(false); // Controle de animação
//   const navigate = useNavigate(); // Hook para redirecionar

//   // Detectar o scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const triggerPoint = window.innerHeight / 2;

//       // Checa se o scroll passou do triggerPoint
//       if (scrollPosition > triggerPoint) {
//         setIsScrolled(true);
//         setTimeout(() => {
//           navigate('/AthleteScreen'); // Redireciona para a nova página
//         }, 1000); // Aguarda a animação (1s)
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [navigate]);

//   return (
//     <div className="content">
//       <HomeScreen/>
//       <div className="section">
//         More Content
//       </div>
//     </div>
//   );
// };

// export default ScrollAnimation;