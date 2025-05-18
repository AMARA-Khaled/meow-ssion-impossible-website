"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Download, Menu, X } from "lucide-react"
import UnityFeatures from "@/components/unity-features"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Meow-ssion Impossible.zip" // file in public folder
    link.download = "Meow-ssion Impossible.zip"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#0a0e1f] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img src="/images/nyan_cat.png" alt="chat" className=" inset-0 object-cover h-12 w-12" />
            <h1 className="text-xl font-bold">Meow-ssion Impossible</h1>
          </div>
          <nav>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <ul
              className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative left-0 right-0 top-16 md:top-0 bg-[#0a0e1f] md:bg-transparent p-4 md:p-0 gap-6 z-20 md:z-auto`}
            >
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors block py-2 md:py-0">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#characters" className="hover:text-blue-400 transition-colors block py-2 md:py-0">
                  Personnages
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-blue-400 transition-colors block py-2 md:py-0">
                  Télécharger
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with New Background */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/night-sky-background.png" alt="Ciel nocturne" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-blue-400">Meow-ssion</span> Impossible
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              Un tireur d'élite. Un chat kidnappé. Une mission de sauvetage épique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button onClick={handleDownload} size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" /> Télécharger
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protagonist Section */}
      <section id="characters" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Personnages</h2>

        {/* Protagonist */}
        <div className="bg-gray-800/50 p-8 rounded-lg max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Le Héros</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-[#1a1a2e] p-4 rounded-lg">
                <Image
                  src="/images/protagonist.png"
                  alt="Yusuf Dikeç"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-semibold mb-3">Yusuf Dikeç</h4>
              <p className="text-gray-300 mb-4">
                Yusuf Dikeç est un tireur d'élite intrépide et déterminé, prêt à tout pour retrouver son chat adoré,
                Okşu. Armé de son sang-froid légendaire et d'une précision redoutable, il traverse des ruines, déjoue
                des pièges et élimine ses ennemis sans hésiter. Ni le danger, ni le chaos, ni le destin ne pourront
                l'empêcher de rejoindre son compagnon à quatre pattes.
              </p>
            </div>
          </div>
        </div>

        {/* Okşu - The Cat */}
        <div className="bg-gray-800/50 p-8 rounded-lg max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Le Chat</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-[#1a1a2e] p-4 rounded-lg">
                <Image src="/images/cat.png" alt="Okşu" width={120} height={120} className="object-contain" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-semibold mb-3">Okşu</h4>
              <p className="text-gray-300 mb-4">
                Okşu est une petite chatte maligne et courageuse, avec de grands yeux malicieux et un instinct de survie
                étonnant. Agile comme l'ombre, elle s'échappe des griffes des voleurs et laisse des traces pour guider
                Yusuf. Douce, futée, mais jamais en détresse — elle attend son héros, la queue en panache et le cœur
                vaillant.
              </p>
            </div>
          </div>
        </div>

        {/* Enemies */}
        <div className="bg-gray-800/50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-red-400">Les Ennemis</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-[#1a1a2e] p-4 rounded-lg">
                <Image
                  src="/images/character-run.png"
                  alt="Voleur de chats"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-semibold mb-3">Voleurs de Chats</h4>
              <p className="text-gray-300 mb-4">
                Les ennemis de Yusuf Dikeç sont une bande de voleurs sans foi ni loi, obsédés par le vol de chats rares
                qu'ils arrachent à leurs foyers pour les revendre au plus offrant. Silencieux, organisés et toujours en
                mouvement, ils opèrent dans l'ombre avec des pièges, des filets, et des motos rapides pour fondre sur
                leurs proies avant de disparaître.
              </p>
              <p className="text-gray-300">
                Leur dernier coup : capturer Okşu, le compagnon fidèle de Yusuf. Mais cette fois, ils se sont attaqués
                au mauvais maître.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weapon Showcase (Pistol Only) */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Arsenal du Jeu</h2>
        <div className="bg-gray-800/50 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-1/2 h-64 flex items-center justify-center bg-gray-900/50 rounded-lg p-4">
              <Image
                src="/images/pistol.png"
                alt="Pistolet Tactique"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Pistolet Tactique</h3>
              <p className="text-gray-300 mb-6">
                L'arme de prédilection de Yusuf. Une arme de poing fiable avec une lampe tactique intégrée. Parfait pour
                les situations de combat rapproché et pour éclairer les zones sombres où pourraient se cacher les
                voleurs de chats.
              </p>
              <p className="text-gray-300">
                Avec une précision remarquable et un chargeur de capacité moyenne, cette arme offre un bon équilibre
                entre puissance et maniabilité, idéal pour un tireur d'élite comme Yusuf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">À Propos du Jeu</h2>
        <div className="bg-gray-800/50 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-gray-300 mb-4">
            Dans ce jeu d'action-aventure plein d'humour et de style, vous incarnez Yusuf Dikeç, un tireur d'élite
            déterminé dont le chat bien-aimé a été enlevé par un gang de voleurs de félins. Armé de votre précision
            légendaire et d'une volonté inébranlable, partez à la poursuite des ravisseurs à travers des niveaux remplis
            de pièges, d'ennemis loufoques et de défis ingénieux. Votre mission est simple : retrouver Okşu, coûte que
            coûte.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto py-16 px-4">
        <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à Sauver Okşu?</h2>
          <p className="text-gray-300 mb-8">Téléchargez le jeu maintenant et commencez votre mission de sauvetage!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleDownload} size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" /> Windows
            </Button>
            <Button onClick={handleDownload} size="lg" className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" /> Mac
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">Version 1.0.0 | 35MB</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Caractéristiques du Jeu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Magnifique Pixel Art</h3>
            <p className="text-gray-300">
              Plongez dans des environnements et des personnages en pixel art magnifiquement conçus, avec une ambiance
              nocturne captivante.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Histoire Captivante</h3>
            <p className="text-gray-300">
              Suivez l'aventure émouvante et pleine d'humour de Yusuf dans sa quête pour retrouver son chat bien-aimé
              Okşu.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-400">Gameplay Stimulant</h3>
            <p className="text-gray-300">
              Testez vos compétences de tireur d'élite, déjouez des pièges et affrontez des voleurs de chats dans des
              niveaux variés et pleins de défis.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Détails Techniques</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <UnityFeatures />
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Configuration Requise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Minimale:</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>OS: Windows 10 ou plus récent</li>
                  <li>Processeur: Intel Core i3</li>
                  <li>Mémoire: 8 GB RAM</li>
                  <li>Graphiques: Compatible DirectX 10</li>
                  <li>Stockage: 100 MB d'espace disponible</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Recommandée:</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>OS: Windows 10</li>
                  <li>Processeur: Intel Core i5</li>
                  <li>Mémoire: 8 GB RAM</li>
                  <li>Graphiques: Compatible DirectX 11</li>
                  <li>Stockage: 100 MB d'espace disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Meow-ssion Impossible. Tous droits réservés.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Conditions d'Utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
