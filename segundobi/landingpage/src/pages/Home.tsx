import '../Home.css'
import '../styles/header.css'
import '../styles/utility.css'
import '../styles/hero.css'
import '../styles/solution.css'
import '../styles/testimonials.css'
import '../styles/pricing.css'
import Logo from "../assets/marlisaboreslogo.svg"
import { useState } from 'react'
import Button from '../components/Button'
import RectangleOne from "../assets/images/RectangleOne.png"
import RectangleTwo from "../assets/images/RectangleTwo.png"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import Check from "../assets/check.svg"
import Card from '../components/Cards'
import CarouselCard from '../components/CarouselCard'
import ProfileImageOne from "../assets/images/perfilum.png"
import ProfileImageTwo from "../assets/images/perfildois.png"
import ProfileImageTree from "../assets/images/perfiltres.webp"


export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
                <nav className='flex items-center justify-between'>
                    <img src={Logo} alt="Logo Marli Sabores" width={200} height={120} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">

                <span className='desktop-only' >
                    <img src={RectangleTwo} alt="Imagem retângulo dois" />

                </span>
                <img src={RectangleOne} alt="Imagem retângulo um" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />

                        </span>
                    </div>
                </div>

            </section>

            <section id='solution' className='container'>
                <header>
                    <span>
                        <h2>Nossas Soluções</h2>
                        <span className="desktop-only">
                            <h2 className='solution-h2'>
                                Conheça as soluções que oferecemos para facilitar sua vida
                            </h2>
                        </span>
                    </span>
                    <p>
                        Oferecemos uma variedade de opções de refeições caseiras,
                        preparadas com ingredientes frescos e saudáveis,
                        entregues diretamente na sua porta.
                        <strong>MarliSabores</strong>
                    </p>
                </header>
                <section className="even-columns">
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' />
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' />
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' />

                </section>

            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <CarouselCard
                            name='joao da silva'
                            title='estudante de engenharia de software'
                            testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            rating={4}
                            profileImage={ProfileImageOne}
                        />

                        <CarouselCard
                            name='joao da silva'
                            title='estudante de engenharia de software'
                            testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            rating={2}
                            profileImage={ProfileImageTwo}
                        />

                        <CarouselCard
                            name='joao da silva'
                            title='estudante de engenharia de software'
                            testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            rating={5}
                            profileImage={ProfileImageTree}
                        />
                    </div>

                    <div className="carousel-content">
                        <CarouselCard
                            name='joao da silva'
                            title='estudante de engenharia de software'
                            testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            rating={4}
                            profileImage={ProfileImageOne}
                        />

                        <CarouselCard
                            name='joao da silva'
                            title='estudante de engenharia de software'
                            testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            rating={2}
                            profileImage={ProfileImageTwo}
                        />

                        <CarouselCard
                            name='Cristiano Ronaldo'
                            title='Jogador de Futebol'
                            testimonial='A Cuca é muito boa, macia e saborosa. é sensacional! SIIIIUUUU!!!!!!!'
                            rating={5}
                            profileImage={ProfileImageTree}
                        />
                    </div>

                </section>

            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                </section>
            </section>




        </>
    )
}