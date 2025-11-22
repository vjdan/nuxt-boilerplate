<template>
  <div class="landing-page">
    <!-- Background Component -->
    <LandingBackgroundsDigitalHive />

    <!-- Hero Section -->
    <LandingHero
      :eyebrow="locale === 'fr' ? 'Texte hero eyebrow' : 'Hero Eyebrow Text'"
      :title="locale === 'fr' ? 'Titre principal hero<br>Titre secondaire hero' : 'Main Hero Title<br>Secondary Hero Title'"
      :subtitle="locale === 'fr' ? 'Sous-titre hero qui explique la proposition de valeur principale de l\'application.' : 'Hero subtitle description that explains the main value proposition of the application.'"
      :cta="primaryCta"
      :note="locale === 'fr' ? 'Texte de note hero • Information additionnelle' : 'Hero note text • Additional information'"
      :highlights="heroHighlights"
      :stats="heroStats" 
      :streams="heroStreams"
      :spotlight="heroSpotlight"
    />

    <!-- Proof Bar -->
    <LandingProofBar
      :eyebrow="locale === 'fr' ? 'Eyebrow section preuve' : 'Proof Section Eyebrow'"
      :logos="proofLogos"
      :metrics="proofMetrics"
      :rating="proofRating"
    />

    <!-- Features Section -->
    <LandingFeatures
      :eyebrow="locale === 'fr' ? 'Eyebrow section fonctionnalités' : 'Features Section Eyebrow'"
      :title="locale === 'fr' ? 'Titre section fonctionnalités' : 'Features Section Title'"
      :description="locale === 'fr' ? 'Paragraphe de description de la section fonctionnalités.' : 'Features section description paragraph that explains the main features.'"
      :features="features"
    />

    <!-- How It Works Section -->
    <LandingHowItWorks
      :eyebrow="locale === 'fr' ? 'Eyebrow comment ça marche' : 'How It Works Eyebrow'"
      :title="locale === 'fr' ? 'Titre comment ça marche' : 'How It Works Title'"
      :description="locale === 'fr' ? 'Paragraphe de description de la section comment ça marche.' : 'How it works section description paragraph.'"
      :steps="steps"
    />

    <!-- Benefits Section -->
    <LandingBenefits
      :eyebrow="locale === 'fr' ? 'Eyebrow section avantages' : 'Benefits Section Eyebrow'"
      :title="locale === 'fr' ? 'Titre section avantages' : 'Benefits Section Title'"
      :description="locale === 'fr' ? 'Paragraphe de description de la section avantages.' : 'Benefits section description paragraph that explains the main benefits.'"
      :benefits="benefits"
    />

    <!-- Social Proof Section -->
    <LandingSocialProof
      :eyebrow="locale === 'fr' ? 'Eyebrow preuve sociale' : 'Social Proof Eyebrow'"
      :title="locale === 'fr' ? 'Titre section preuve sociale' : 'Social Proof Section Title'"
      :description="locale === 'fr' ? 'Paragraphe de description de la section preuve sociale.' : 'Social proof section description paragraph.'"
      :testimonials="testimonials"
    />

    <!-- Pricing Section -->
    <LandingPricing
      :eyebrow="locale === 'fr' ? 'Eyebrow section tarifs' : 'Pricing Section Eyebrow'"
      :title="locale === 'fr' ? 'Titre section tarifs' : 'Pricing Section Title'"
      :description="locale === 'fr' ? 'Paragraphe de description de la section tarifs.' : 'Pricing section description paragraph.'"
      :plans="plans"
    />

    <!-- FAQ Section -->
    <LandingFAQ
      :eyebrow="locale === 'fr' ? 'Eyebrow section FAQ' : 'FAQ Section Eyebrow'"
      :title="locale === 'fr' ? 'Titre section FAQ' : 'FAQ Section Title'"
      :description="locale === 'fr' ? 'Paragraphe de description de la section FAQ.' : 'FAQ section description paragraph.'"
      :note="locale === 'fr' ? 'Texte de note section FAQ.' : 'FAQ section note text.'"
      :faqs="faqs"
    />

    <!-- Final CTA Section -->
    <LandingFinalCTA
      :eyebrow="locale === 'fr' ? 'Eyebrow CTA final' : 'Final CTA Eyebrow'"
      :title="locale === 'fr' ? 'Titre CTA final' : 'Final CTA Title'"
      :description="locale === 'fr' ? 'Paragraphe de description CTA final.' : 'Final CTA description paragraph.'"
      :points="finalPoints"
      :cta="primaryCta"
      :note="locale === 'fr' ? 'Texte de note CTA final' : 'Final CTA note text'"
    />

    <!-- Footer -->
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
// Internationalisation  
const { t, locale } = useI18n()

// Page metadata
definePageMeta({
  title: 'App Name - Generic Title'
})

// SEO head avec i18n - utilisation de titres statiques pour éviter les erreurs
useHead({
  title: locale.value === 'fr' ? 'Nom App - Titre Générique' : 'App Name - Generic Title',
  meta: [
    {
      name: 'description',
      content: locale.value === 'fr' 
        ? 'Description générique de l\'application en français.'
        : 'Generic application description in English.'
    }
  ]
})

// CTA principal réactif selon la langue
const primaryCta = computed(() => ({
  label: locale.value === 'fr' ? 'Bouton CTA' : 'CTA Button',
  to: '/register'
}))

// Données pour les composants - utilisation de données statiques traduites dynamiquement
const heroHighlights = computed(() => [
  { 
    title: locale.value === 'fr' ? 'Fonctionnalité 1' : 'Feature 1',
    detail: locale.value === 'fr' ? 'Texte de description fonctionnalité 1.' : 'Feature 1 description text.',
    icon: '🚀' 
  },
  { 
    title: locale.value === 'fr' ? 'Fonctionnalité 2' : 'Feature 2',
    detail: locale.value === 'fr' ? 'Texte de description fonctionnalité 2.' : 'Feature 2 description text.',
    icon: '🔄' 
  },
  { 
    title: locale.value === 'fr' ? 'Fonctionnalité 3' : 'Feature 3',
    detail: locale.value === 'fr' ? 'Texte de description fonctionnalité 3.' : 'Feature 3 description text.',
    icon: '⚡' 
  }
])

const heroStats = computed(() => [
  { 
    label: locale.value === 'fr' ? 'Label stat 1' : 'Stat 1 Label',
    value: locale.value === 'fr' ? 'Valeur stat 1' : 'Stat 1 Value',
    hint: locale.value === 'fr' ? 'Texte de description stat 1' : 'Stat 1 description text'
  },
  { 
    label: locale.value === 'fr' ? 'Label stat 2' : 'Stat 2 Label',
    value: 'Valeur stat 2',
    hint: locale.value === 'fr' ? 'Texte de description stat 2' : 'Stat 2 description text'
  },
  { 
    label: locale.value === 'fr' ? 'Label stat 3' : 'Stat 3 Label',
    value: locale.value === 'fr' ? 'Valeur stat 3' : 'Stat 3 Value',
    hint: locale.value === 'fr' ? 'Texte de description stat 3' : 'Stat 3 description text'
  }
])

const heroSpotlight = computed(() => ({
  metric: locale.value === 'fr' ? 'Métrique Spotlight' : 'Spotlight Metric',
  value: 'Valeur',
  delta: locale.value === 'fr' ? 'Delta français' : 'Delta English'
}))

// Données statiques (logos, noms d'entreprises, etc.)
const heroStreams = [
  { 
    title: locale.value === 'fr' ? 'Élément stream 1' : 'Stream Item 1', 
    status: locale.value === 'fr' ? 'Statut 1' : 'Status 1', 
    time: locale.value === 'fr' ? 'Info temps 1' : 'Time Info 1'
  },
  { 
    title: locale.value === 'fr' ? 'Élément stream 2' : 'Stream Item 2', 
    status: locale.value === 'fr' ? 'Statut 2' : 'Status 2', 
    time: locale.value === 'fr' ? 'Info temps 2' : 'Time Info 2'
  },
  { 
    title: locale.value === 'fr' ? 'Élément stream 3' : 'Stream Item 3', 
    status: locale.value === 'fr' ? 'Statut 3' : 'Status 3', 
    time: locale.value === 'fr' ? 'Info temps 3' : 'Time Info 3'
  }
]

const proofLogos = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F']

const proofMetrics = computed(() => [
  { 
    value: 'Valeur métrique 1',
    label: locale.value === 'fr' ? 'Label métrique 1' : 'Metric Label 1',
    detail: locale.value === 'fr' ? 'Détail métrique 1' : 'Metric Detail 1'
  },
  { 
    value: 'Valeur métrique 2',
    label: locale.value === 'fr' ? 'Label métrique 2' : 'Metric Label 2',
    detail: locale.value === 'fr' ? 'Détail métrique 2' : 'Metric Detail 2'
  }
])

const proofRating = computed(() => ({
  score: '4.8',
  detail: locale.value === 'fr' ? 'Description rating' : 'Rating description'
}))

// Fonctionnalités avec contenu statique pour éviter les erreurs d'apostrophes
const features = [
  {
    title: 'Titre fonctionnalité 1',
    description: 'Texte de description fonctionnalité 1.',
    icon: 'i-heroicons-sparkles',
    tag: 'Tag 1',
    points: ['Point fonctionnalité 1.1', 'Point fonctionnalité 1.2']
  },
  {
    title: 'Titre fonctionnalité 2',
    description: 'Texte de description fonctionnalité 2.',
    icon: 'i-heroicons-arrow-path-rounded-square',
    tag: 'Tag 2',
    points: ['Point fonctionnalité 2.1', 'Point fonctionnalité 2.2']
  },
  {
    title: 'Titre fonctionnalité 3',
    description: 'Texte de description fonctionnalité 3.',
    icon: 'i-heroicons-bell-alert',
    points: ['Point fonctionnalité 3.1', 'Point fonctionnalité 3.2']
  },
  {
    title: 'Titre fonctionnalité 4',
    description: 'Texte de description fonctionnalité 4.',
    icon: 'i-heroicons-cpu-chip',
    tag: 'Tag 4',
    points: ['Point fonctionnalité 4.1', 'Point fonctionnalité 4.2']
  },
  {
    title: 'Titre fonctionnalité 5',
    description: 'Texte de description fonctionnalité 5.',
    icon: 'i-heroicons-chart-bar-square',
    points: ['Point fonctionnalité 5.1', 'Point fonctionnalité 5.2']
  },
  {
    title: 'Titre fonctionnalité 6',
    description: 'Texte de description fonctionnalité 6.',
    icon: 'i-heroicons-shield-check',
    tag: 'Tag 6',
    points: ['Point fonctionnalité 6.1', 'Point fonctionnalité 6.2']
  }
]

const benefits = [
  {
    title: 'Titre avantage 1',
    description: 'Texte de description avantage 1.',
    proof: 'Texte de preuve avantage 1.',
    icon: '⏱️'
  },
  {
    title: 'Titre avantage 2',
    description: 'Texte de description avantage 2.',
    proof: 'Texte de preuve avantage 2.',
    icon: '🧠'
  },
  {
    title: 'Titre avantage 3',
    description: 'Texte de description avantage 3.',
    proof: 'Texte de preuve avantage 3.',
    icon: '🎯'
  },
  {
    title: 'Titre avantage 4',
    description: 'Texte de description avantage 4.',
    proof: 'Texte de preuve avantage 4.',
    icon: '🛡️'
  }
]

const steps = [
  {
    tag: 'Étape 1',
    title: 'Titre étape 1',
    text: 'Texte de description étape 1.',
    points: ['Point étape 1.1', 'Point étape 1.2', 'Point étape 1.3']
  },
  {
    tag: 'Étape 2',
    title: 'Titre étape 2',
    text: 'Texte de description étape 2.',
    points: ['Point étape 2.1', 'Point étape 2.2', 'Point étape 2.3']
  },
  {
    tag: 'Étape 3',
    title: 'Titre étape 3',
    text: 'Texte de description étape 3.',
    points: ['Point étape 3.1', 'Point étape 3.2', 'Point étape 3.3']
  }
]

const testimonials = [
  {
    quote: 'Contenu de citation témoignage 1.',
    result: 'Texte de résultat témoignage 1',
    name: 'Nom Personne 1',
    role: 'Titre Poste 1, Entreprise 1'
  },
  {
    quote: 'Contenu de citation témoignage 2.',
    result: 'Texte de résultat témoignage 2',
    name: 'Nom Personne 2',
    role: 'Titre Poste 2, Entreprise 2'
  },
  {
    quote: 'Contenu de citation témoignage 3.',
    result: 'Texte de résultat témoignage 3',
    name: 'Nom Personne 3',
    role: 'Titre Poste 3, Entreprise 3'
  }
]

const faqs = [
  {
    question: 'Question 1 ?',
    answer: 'Contenu de réponse 1.'
  },
  {
    question: 'Question 2 ?',
    answer: 'Contenu de réponse 2.'
  },
  {
    question: 'Question 3 ?',
    answer: 'Contenu de réponse 3.'
  },
  {
    question: 'Question 4 ?',
    answer: 'Contenu de réponse 4.'
  },
  {
    question: 'Question 5 ?',
    answer: 'Contenu de réponse 5.'
  },
  {
    question: 'Question 6 ?',
    answer: 'Contenu de réponse 6.'
  }
]

const plans = [
  {
    name: 'Plan 1',
    description: 'Texte de description plan 1.',
    price: 'Prix 1',
    period: '/période',
    features: [
      'Fonctionnalité 1',
      'Fonctionnalité 2',
      'Fonctionnalité 3',
      'Fonctionnalité 4'
    ],
    note: 'Texte de note plan 1.',
    cta: { label: 'Bouton CTA', to: '/register' }
  },
  {
    name: 'Plan 2',
    description: 'Texte de description plan 2.',
    price: 'Prix 2',
    period: '/période',
    features: [
      'Fonctionnalité 1',
      'Fonctionnalité 2',
      'Fonctionnalité 3',
      'Fonctionnalité 4'
    ],
    note: 'Texte de note plan 2.',
    popular: true,
    cta: { label: 'Bouton CTA', to: '/register' }
  }
]

const finalPoints = [
  'Texte point 1',
  'Texte point 2',
  'Texte point 3'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');

.landing-page {
  position: relative;
  display: flex;
  flex-direction: column;
}

:global(.app-content) {
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
}
</style>
