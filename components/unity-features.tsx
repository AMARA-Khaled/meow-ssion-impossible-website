import { Check } from "lucide-react"

interface FeatureProps {
  title: string
  description: string
}

const Feature = ({ title, description }: FeatureProps) => (
  <div className="flex items-start space-x-2">
    <div className="mt-1 bg-blue-500 rounded-full p-1 flex-shrink-0">
      <Check className="h-3 w-3 text-white" />
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
)

export default function UnityFeatures() {
  const features = [
    {
      title: "Animation 2D",
      description: "Animations de personnages fluides utilisant le système d'animation 2D d'Unity",
    },
    {
      title: "Cinemachine",
      description: "Contrôle dynamique de la caméra pour des expériences de jeu cinématiques",
    },
    {
      title: "Pixel Perfect",
      description: "Rendu pixel art net et propre sans flou ni artefacts",
    },
    {
      title: "Physique 2D",
      description: "Mouvements réalistes et interactions avec l'environnement",
    },
    {
      title: "Système de Tilemap",
      description: "Niveaux conçus efficacement à l'aide des outils Tilemap d'Unity",
    },
    {
      title: "Visual Scripting",
      description: "Mécaniques de jeu complexes sans codage traditionnel",
    },
  ]

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-blue-400">Fonctionnalités du Moteur Unity</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Feature key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  )
}
