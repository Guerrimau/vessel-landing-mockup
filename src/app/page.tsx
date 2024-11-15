"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Zap,
  Users,
  ArrowRight,
  Star,
  Check,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 50 ? "bg-gray-900 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-500">
            Vessel México
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              href="#beneficios"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Beneficios
            </Link>
            <Link
              href="#modelos"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Modelos
            </Link>
            <Link
              href="#testimonios"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Testimonios
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-red-600 hover:bg-red-700"
            >
              <Link href="#contacto">Cotizar ahora</Link>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="#beneficios"
              className="text-2xl text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#modelos"
              className="text-2xl text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Modelos
            </Link>
            <Link
              href="#testimonios"
              className="text-2xl text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-red-600 hover:bg-red-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="#contacto">Cotizar ahora</Link>
            </Button>
          </nav>
        </div>
      )}

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <img
                src="https://modernprefabs.com/wp-content/uploads/vessel-houses-prefab-home-exterior-deck-scaled.jpg"
                alt="Contenedor inteligente Vessel en un entorno moderno"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-down">
              Revoluciona tu forma de vivir
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 animate-fade-in-up">
              Contenedores inteligentes desde $30,000 USD. Tecnología, comodidad
              y sustentabilidad en un solo lugar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              <Link href="#contacto">Descubre el futuro de la vivienda</Link>
            </Button>
            <div className="mt-12 animate-bounce">
              <ArrowDown className="h-8 w-8 mx-auto text-white" />
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Beneficios incomparables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-700 border-none hover:bg-gray-600 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    Precio accesible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    Desde $30,000 USD, ofrecemos viviendas de alta calidad a un
                    precio inigualable en el mercado mexicano.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-none hover:bg-gray-600 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Zap className="mr-2 h-6 w-6" />
                    Tecnología avanzada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    Nuestros contenedores inteligentes incorporan lo último en
                    domótica y eficiencia energética.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-none hover:bg-gray-600 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Users className="mr-2 h-6 w-6" />
                    Versatilidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    Perfectos para terrenos individuales o proyectos de
                    desarrollo a gran escala.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="modelos" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Nuestros modelos
            </h2>
            <Tabs defaultValue="basico" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basico">Básico</TabsTrigger>
                <TabsTrigger value="familiar">Familiar</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
              </TabsList>
              <TabsContent value="basico">
                <Card>
                  <CardHeader>
                    <CardTitle>Modelo básico</CardTitle>
                    <CardDescription>
                      Perfecto para individuos o parejas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://media.es.wired.com/photos/669ea491863afeef2283fab4/master/w_1600%2Cc_limit/840b7ef5e775c22a51c4e04638584810.jpeg"
                      alt="Modelo Básico Vessel"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Cocina
                        equipada
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Baño
                        completo
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Área
                        de descanso
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#contacto">Cotizar desde $30,000 USD</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="familiar">
                <Card>
                  <CardHeader>
                    <CardTitle>Modelo familiar</CardTitle>
                    <CardDescription>
                      Espacioso y versátil para familias
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://media.es.wired.com/photos/669ea491863afeef2283fab4/master/w_1600%2Cc_limit/840b7ef5e775c22a51c4e04638584810.jpeg"
                      alt="Modelo Familiar Vessel"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Dos
                        habitaciones
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Área
                        de estar amplia
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Cocina
                        y comedor integrados
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#contacto">Cotizar desde $45,000 USD</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="premium">
                <Card>
                  <CardHeader>
                    <CardTitle>Modelo premium</CardTitle>
                    <CardDescription>
                      Experiencia de lujo y alta tecnología
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://media.es.wired.com/photos/669ea491863afeef2283fab4/master/w_1600%2Cc_limit/840b7ef5e775c22a51c4e04638584810.jpeg"
                      alt="Modelo Premium Vessel"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                        Acabados de alta gama
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                        Domótica avanzada
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" /> Diseño
                        personalizable
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#contacto">Cotizar desde $60,000 USD</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="testimonios" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  text: "Vessel ha transformado completamente mi concepto de hogar. La tecnología y el diseño son impresionantes.",
                  author: "María Rodríguez",
                },
                {
                  text: "Nunca pensé que vivir en un contenedor pudiera ser tan cómodo y moderno. ¡Vessel superó todas mis expectativas!",
                  author: "Carlos Mendoza",
                },
                {
                  text: "La eficiencia energética y la domótica de mi Vessel me han permitido ahorrar y vivir de manera más sostenible.",
                  author: "Ana Sofía Ortiz",
                },
              ].map((testimonial, i) => (
                <Card
                  key={i}
                  className="bg-gray-700 border-none flex-shrink-0 w-80 md:w-auto"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-5 w-5 text-yellow-500 mr-2 fill-current"
                        />
                      ))}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-gray-200">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-semibold text-white">
                      - {testimonial.author}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-red-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              ¿Listo para revolucionar tu concepto de vivienda?
            </h2>
            <p className="text-xl text-white mb-8">
              Contáctanos hoy y descubre cómo Vessel puede transformar tu vida.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-red-600 bg-white hover:bg-gray-100"
            >
              <Link href="/contacto" className="flex items-center">
                Solicita tu cotización personalizada{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2024 Vessel México. Todos los derechos reservados.
            </p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Términos
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
