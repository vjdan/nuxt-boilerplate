export const messages = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      dashboard: 'Dashboard',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      menu: 'Menu',
      toggleMenu: 'Toggle menu',
      closeMenu: 'Close menu',
      openDashboardMenu: 'Open dashboard menu',
      changeLanguage: 'Change language'
    },
    breadcrumbs: {
      dashboard: 'Dashboard',
      analytics: 'Analytics',
      reports: 'Reports',
      insights: 'Insights',
      users: 'Users',
      userList: 'User List',
      roles: 'Roles',
      settings: 'Settings',
      profile: 'Profile',
      security: 'Security',
      notifications: 'Notifications'
    },
    landing: {
      ctaLabel: 'Start for free',
      hero: {
        eyebrow: 'New: playbooks ready in 10 minutes',
        title: 'Get follow-ups that convert<br>without spreadsheets or copy-paste.',
        subtitle: 'MyApp orchestrates your B2B follow-ups: connect your CRM, activate a validated playbook, and let the platform personalize every nudge at the right time.',
        note: 'No credit card • Guided onboarding in 30 minutes',
        highlights: [
          { title: 'Ready-made playbooks', detail: 'Validated sequences for every B2B scenario.', icon: '🚀' },
          { title: 'CRM sync', detail: 'No double entry, scoring and tasks auto-updated.', icon: '🔄' },
          { title: 'Hot signals', detail: 'Slack alerts when a deal heats up or picks up.', icon: '⚡' }
        ],
        stats: [
          { label: 'Time saved', value: '-12 h/week', hint: 'Automated follow-ups + Slack reminders' },
          { label: 'More replies', value: '+34%', hint: 'Optimized subjects + CRM personalization' },
          { label: 'Time to launch', value: '24 h', hint: 'Guided onboarding, no credit card needed' }
        ],
        streams: [
          { title: 'Lisa • Inbound SMB', status: 'Ready to send', time: 'Sequence 4 · Day 3' },
          { title: 'Dylan • Quote follow-up', status: 'Waiting for approval', time: 'Sequence 2 · Day 1' },
          { title: 'Allan • POC in progress', status: 'Sent + reminder scheduled', time: 'Sequence 5 · Day 6' }
        ],
        spotlight: {
          metric: 'Average reply rate',
          value: '38%',
          delta: '+6 pts vs last month'
        },
        visual: {
          playbookTitle: 'Active playbook',
          playbookName: 'Open deal follow-ups',
          status: 'Live',
          prioritiesTitle: 'Today\\'s priorities'
        }
      },
      proof: {
        eyebrow: 'Trusted by leading teams',
        metrics: [
          { value: '+2 400', label: 'B2B teams', detail: 'Sales, success, and growth' },
          { value: '34%', label: 'time saved', detail: 'on average after 30 days' }
        ],
        rating: { score: '4.8', detail: 'Average rating on G2 and Capterra' }
      },
      features: {
        eyebrow: 'Key capabilities',
        title: 'Everything you need to run frictionless follow-ups',
        description: 'A platform that orchestrates your sequences, alerts your teams, and keeps CRM perfectly up to date.',
        items: [
          {
            title: 'Multi-channel orchestration',
            description: 'Email, LinkedIn tasks, and call reminders triggered at the right time based on the pipeline.',
            icon: 'i-heroicons-sparkles',
            tag: 'Playbooks',
            points: ['Validated templates for B2B teams', 'Optimized timing at every stage']
          },
          {
            title: 'Real-time CRM sync',
            description: 'Automatic updates and logs: no more copy/paste or missed entries in HubSpot, Pipedrive, or Salesforce.',
            icon: 'i-heroicons-arrow-path-rounded-square',
            tag: 'Ops',
            points: ['Create tasks and custom fields', 'Auto-remove contacts without opt-in']
          },
          {
            title: 'Hot-signal alerts',
            description: 'Slack and email alert the team when a prospect opens, clicks, or replies.',
            icon: 'i-heroicons-bell-alert',
            points: ['Priority scores updated continuously', 'Targeted notifications per team']
          },
          {
            title: 'AI personalization ready to use',
            description: 'CRM summaries, angle suggestions, and contextual copy in one click.',
            icon: 'i-heroicons-cpu-chip',
            tag: 'AI assistant',
            points: ['Tone adjustable by persona', 'Human checks before sending']
          },
          {
            title: 'Team and market-fit view',
            description: 'Dashboards ready to track by segment, sequence, and AE.',
            icon: 'i-heroicons-chart-bar-square',
            points: ['Real-time KPIs', 'Compare active playbooks']
          },
          {
            title: 'Native security & compliance',
            description: 'EU hosting, granular permissions, and full audit trail for every action.',
            icon: 'i-heroicons-shield-check',
            tag: 'Trust',
            points: ['Fine-grained roles', 'Secure exports on request']
          }
        ]
      },
      benefits: {
        eyebrow: 'Value proposition',
        title: 'Why choose MyApp for your B2B follow-ups?',
        description: 'Every block is designed to reduce friction: everything is ready, connected to your CRM, and optimized so teams spend less time chasing and more time closing.',
        items: [
          {
            title: 'Cut follow-up time by 60%',
            description: 'Playbooks ready for every stage: quotes, POC, renewals, inbound follow-ups.',
            proof: '10 minutes to launch a full sequence.',
            icon: '⏱️'
          },
          {
            title: 'Personalization without spreadsheets',
            description: 'AI summarizes CRM records, finds key signals, and generates contextualized messages.',
            proof: '+34% replies on personalized campaigns.',
            icon: '🧠'
          },
          {
            title: 'Clear priorities for SDRs',
            description: 'Real-time scoring, auto tasks, and Slack alerts to focus on what's hot.',
            proof: 'Your 10 hottest deals every morning.',
            icon: '🎯'
          },
          {
            title: 'Ops and compliance covered',
            description: 'Two-way sync with your CRM, opt-in management, automatic suppression on request.',
            proof: 'No double entry or out-of-opt-in contacts.',
            icon: '🛡️'
          }
        ]
      },
      how: {
        eyebrow: 'How it works',
        title: '3 steps to launch your follow-ups without spreadsheets',
        description: 'No hacks: we connect your tools, activate a proven playbook, and you follow results live.',
        steps: [
          {
            tag: 'Step 1',
            title: 'Connect your tools',
            text: 'HubSpot, Pipedrive, Salesforce, or your custom CRM via API.',
            points: ['Import contacts and deals in 1 click', 'Automatic dedupe cleanup', 'Scoring activated from the first sync']
          },
          {
            tag: 'Step 2',
            title: 'Pick a validated playbook',
            text: 'Email, LinkedIn, and manual task sequences ready for every case.',
            points: ['Templates vetted by B2B teams', 'Personalization generated from CRM', 'Timing optimized to your cycle']
          },
          {
            tag: 'Step 3',
            title: 'Track results live',
            text: 'The platform follows up, notifies, and updates your CRM for you.',
            points: ['Alerts on hot signals', 'Dashboards by team and market', 'Recommended next steps']
          }
        ]
      },
      socialProof: {
        eyebrow: 'Social proof',
        title: 'They removed friction from their follow-ups',
        description: 'Sales, success, and growth teams who need visibility and guided actions every day.',
        testimonials: [
          {
            quote: 'We doubled our booked meetings in 6 weeks without hiring.',
            result: '+52% replies on multi-channel sequences',
            name: 'Claire Dumont',
            role: 'Head of Sales, Alto'
          },
          {
            quote: 'SDRs know what to do each morning; follow-ups are already prepared.',
            result: '-11 h per week of repetitive tasks',
            name: 'Yanis Karim',
            role: 'CEO, Neostack'
          },
          {
            quote: 'We finally have a reliable view of ongoing follow-ups and their impact.',
            result: '+18% conversion MQL > SQL in 2 months',
            name: 'Leila Haddad',
            role: 'RevOps, NovaTech'
          }
        ]
      },
      faq: {
        eyebrow: 'Frequent objections',
        title: 'We answer before you even ask',
        description: 'Pricing, setup time, security: here are quick answers so you can decide with confidence.',
        note: 'A CSM supports you during the first 30 days to guarantee a frictionless rollout.',
        items: [
          {
            question: 'How long to get started?',
            answer: 'Under 30 minutes: connect the CRM, import templates if needed, and activate a playbook.'
          },
          {
            question: 'Which integrations are available?',
            answer: 'HubSpot, Pipedrive, Salesforce, Google Sheets, Zapier, and webhooks for internal tools.'
          },
          {
            question: 'Can I keep my existing templates?',
            answer: 'Yes, import Markdown or CSV. We help convert them into playbooks with automatic personalization.'
          },
          {
            question: 'What about compliance / GDPR?',
            answer: 'Data hosted in the EU, full logs, automatic deletion on request, and fine-grained opt-in management.'
          },
          {
            question: 'Is there a commitment?',
            answer: 'No. Free trial, then monthly subscription. Cancel in one click from the customer space.'
          },
          {
            question: 'How are you different from a simple emailing tool?',
            answer: 'We orchestrate multi-channel follow-up, synced to CRM with real-time scoring. Emailing is just one channel.'
          }
        ]
      },
      pricing: {
        eyebrow: 'Offer',
        title: 'One goal: launch your playbooks quickly',
        description: 'Pick the plan that suits you. Same CTA everywhere to keep the goal clear.',
        plans: [
          {
            name: 'Starter',
            description: 'Launch your first playbooks with a small team.',
            price: '€39',
            period: '/user/month',
            features: [
              'Unlimited email + LinkedIn sequences',
              'HubSpot & Pipedrive connectors',
              'Hot deal scoring + alerts',
              'Email support and knowledge base'
            ],
            note: 'Ideal for 1 to 3 people.',
            ctaLabel: 'Start for free'
          },
          {
            name: 'Growth',
            description: 'For teams following up at scale.',
            price: '€89',
            period: '/user/month',
            features: [
              'Multi-team playbooks + roles',
              'Salesforce & custom webhooks',
              'Real-time insights + Slack alerts',
              'Dedicated CSM and onboarding workshop'
            ],
            note: 'Priority support included.',
            popular: true,
            ctaLabel: 'Start for free'
          }
        ]
      },
      finalCta: {
        eyebrow: 'Ready to start?',
        title: 'Try MyApp and win your next signatures this week.',
        description: 'Connect your CRM, pick a playbook, and the platform handles follow-ups and reminders.',
        note: 'No credit card • Cancel in one click',
        points: [
          'Playbooks ready to follow up today',
          'Automatic personalization without spreadsheets',
          'Human support in French'
        ],
        panel: {
          title: 'You jump in, we handle the rest',
          rows: [
            { label: 'Check', text: 'Ready-to-use playbooks' },
            { label: 'Sync', text: 'CRM connected, real-time scoring' },
            { label: 'Ship', text: 'Follow-ups sent this week', metric: '484' }
          ]
        }
      },
      footer: {
        tagline: 'The follow-up platform that removes friction for B2B teams.',
        chips: ['GDPR-ready', 'Support in French'],
        columns: {
          product: {
            title: 'Product',
            links: [
              { label: 'Benefits', href: '#benefits' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' }
            ]
          },
          resources: {
            title: 'Resources',
            links: [
              { label: 'Testimonials', href: '#temoignages' },
              { label: 'Proof', href: '#preuve' },
              { label: 'Guides', href: '#' },
              { label: 'Webinars', href: '#' }
            ]
          },
          contact: {
            title: 'Contact',
            links: [
              { label: 'hello@myapp.com', href: 'mailto:hello@myapp.com' },
              { label: '+33 1 02 03 04 05', href: 'tel:+33102030405' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Slack community', href: '#' }
            ]
          }
        },
        bottom: {
          rights: '© {year} MyApp. All rights reserved.',
          legal: ['Security', 'Privacy policy', 'Terms']
        }
      }
    },
    auth: {
      common: {
        email: 'Email address',
        password: 'Password',
        confirmPassword: 'Confirm password',
        emailPlaceholder: 'you@example.com',
        passwordPlaceholder: '••••••••'
      },
      errors: {
        invalidCredentials: 'Invalid email or password',
        passwordMismatch: 'Passwords do not match',
        passwordLength: 'Password must be at least 6 characters',
        registrationFailed: 'Registration failed. Email might be in use.'
      },
      login: {
        eyebrow: 'Welcome',
        title: 'Sign in to continue.',
        description: 'Modern authentication with guided flows and a helpful dashboard.',
        highlights: ['Secure authentication', 'Easy access to features', 'Simple and intuitive'],
        panelStats: [
          { value: '99%', label: 'Uptime' },
          { value: '24/7', label: 'Support' }
        ],
        formTitle: 'Sign in',
        subtitlePrefix: 'or',
        subtitleLink: 'create new account',
        submit: 'Sign in'
      },
      register: {
        eyebrow: 'Get Started',
        title: 'Create your account today.',
        description: 'Set up MyApp in minutes and keep your team aligned from day one.',
        perks: ['Ready-made playbooks', 'Guided onboarding', 'Security by default', 'Works with your CRM'],
        milestones: [
          { time: 'Step 1', title: 'Account setup complete' },
          { time: 'Step 2', title: 'First action completed' },
          { time: 'Step 3', title: 'Ready to use' }
        ],
        formTitle: 'Register',
        subtitlePrefix: 'Already have an account?',
        subtitleLink: 'Sign in',
        submit: 'Create account'
      }
    },
    dashboard: {
      menu: {
        overview: 'Overview',
        analytics: 'Analytics',
        reports: 'Reports',
        insights: 'Insights',
        users: 'Users',
        allUsers: 'All Users',
        roles: 'Roles',
        settings: 'Settings'
      },
      overview: {
        eyebrow: 'Command center',
        title: 'Welcome back 👋',
        intro: "Here's your live product + revenue pulse. Everything is responsive, so the cockpit keeps pace across devices.",
        highlights: [
          'Usage anomalies flagged automatically',
          'AI updates pipeline notes in Slack',
          'Experiments tracked across devices'
        ],
        chips: {
          arr: 'ARR',
          nrr: 'NRR',
          experiments: 'Experiments'
        },
        actions: {
          viewSettings: 'View settings',
          viewReports: 'View reports'
        },
        trend: {
          title: 'ARR trend',
          value: '$2.4M',
          change: '+18.4%',
          footer: 'Forecast locked • Next review Friday'
        },
        priority: {
          title: 'Priority queue',
          viewAll: 'View all',
          tasks: [
            {
              title: 'Enterprise renewal',
              detail: 'Acme Inc. up for renewal in 6 days',
              action: 'Open room'
            },
            {
              title: 'Usage spike',
              detail: 'Orbit analytics ↑ 42% week over week',
              action: 'Alert reps'
            },
            {
              title: 'Dormant segment',
              detail: '12 workspaces inactive for 30 days',
              action: 'Review copy'
            }
          ]
        },
        stats: [
          { label: 'Pipeline influenced', change: '+12.4%' },
          { label: 'Risk accounts', change: '-5 this week' },
          { label: 'Journeys live', change: '+3 launched' },
          { label: 'Signals processed', change: 'Realtime' }
        ],
        playbooks: {
          eyebrow: 'Automation health',
          title: 'Active playbooks',
          action: 'Share',
          '0': {
            name: 'Expansion radar',
            description: 'Flags customers with >20% usage spike',
            status: 'Running'
          },
          '1': {
            name: 'Renewal autopilot',
            description: 'Orchestrates 90-day success plan',
            status: 'Running'
          },
          '2': {
            name: 'Dormant win-back',
            description: 'AI writes outreach for inactive teams',
            status: 'Paused'
          }
        },
        activity: {
          eyebrow: 'Activity',
          title: 'Recent timeline',
          list: [
            { title: 'Workspace created', copy: 'Your account was successfully provisioned', time: '2m ago' },
            { title: 'Segment synced', copy: 'Product metrics from Snowflake refreshed', time: '18m ago' },
            { title: 'Playbook shipped', copy: 'Expansion radar pushed to Salesforce', time: '1h ago' }
          ]
        },
        integrations: {
          eyebrow: 'Integrations',
          title: 'Live data sources',
          list: [
            { name: 'Stripe', status: 'Billing + invoices', sync: '2m ago' },
            { name: 'Snowflake', status: 'Product warehouse', sync: '5m ago' },
            { name: 'HubSpot', status: 'CRM & deals', sync: '12m ago' }
          ]
        }
      },
      settings: {
        title: 'Settings',
        description: 'Configure your application settings',
        cards: [
          { title: 'Profile Settings', description: 'Update your personal information' },
          { title: 'Notifications', description: 'Manage email and push notifications' },
          { title: 'Security', description: 'Password and two-factor authentication' }
        ]
      },
      pages: {
        analyticsReports: {
          title: 'Analytics - Reports',
          description: 'Demo sub-page for Analytics > Reports',
          cards: [
            { title: 'Revenue Report', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'User Report', description: 'Sed do eiusmod tempor incididunt ut labore et dolore.' }
          ]
        },
        analyticsInsights: {
          title: 'Analytics - Insights',
          description: 'Demo sub-page for Analytics > Insights',
          cards: [
            { title: 'Key Metric', description: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
            { title: 'Trend Analysis', description: 'Duis aute irure dolor in reprehenderit in voluptate.' }
          ]
        },
        users: {
          title: 'Users',
          description: 'Manage all users in your application',
          cards: [
            { title: 'Total Users', metric: '1,234', tone: 'accent' },
            { title: 'Active Today', metric: '567', tone: 'success' }
          ]
        },
        roles: {
          title: 'Roles',
          description: 'Manage user roles and permissions',
          cards: [
            { title: 'Admin', description: 'Full access to settings and data' },
            { title: 'Editor', description: 'Can edit content and workflows' },
            { title: 'Viewer', description: 'Read-only access to dashboards' }
          ]
        }
      }
    }
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      faq: 'FAQ',
      dashboard: 'Tableau de bord',
      login: 'Connexion',
      register: 'Créer un compte',
      logout: 'Déconnexion',
      menu: 'Menu',
      toggleMenu: 'Ouvrir/fermer le menu',
      closeMenu: 'Fermer le menu',
      openDashboardMenu: 'Ouvrir le menu du tableau de bord',
      changeLanguage: 'Changer de langue'
    },
    breadcrumbs: {
      dashboard: 'Tableau de bord',
      analytics: 'Analyses',
      reports: 'Rapports',
      insights: 'Insights',
      users: 'Utilisateurs',
      userList: 'Liste des utilisateurs',
      roles: 'Rôles',
      settings: 'Paramètres',
      profile: 'Profil',
      security: 'Sécurité',
      notifications: 'Notifications'
    },
    landing: {
      ctaLabel: 'Essayer gratuitement',
      hero: {
        eyebrow: 'Nouveau : playbooks prêts en 10 minutes',
        title: 'Obtenez des relances qui convertissent<br>sans tableur ni copier-coller.',
        subtitle: 'MyApp orchestre vos suivis B2B : connectez votre CRM, activez un playbook validé et laissez la plateforme personnaliser chaque relance au bon moment.',
        note: 'Sans carte bancaire • Onboarding guidé en 30 minutes',
        highlights: [
          { title: 'Playbooks prêts', detail: 'Séquences validées pour chaque scénario B2B.', icon: '🚀' },
          { title: 'Sync CRM', detail: 'Pas de double saisie, scoring et tâches auto.', icon: '🔄' },
          { title: 'Signaux chauds', detail: 'Alertes Slack quand un deal chauffe ou décroche.', icon: '⚡' }
        ],
        stats: [
          { label: 'Temps gagné', value: '-12 h/sem', hint: 'Relances automatisées + rappels Slack' },
          { label: 'Réponses en plus', value: '+34%', hint: 'Objets optimisés + personnalisation CRM' },
          { label: 'Mise en route', value: '24 h', hint: 'Onboarding guidé, sans carte bancaire' }
        ],
        streams: [
          { title: 'Lisa • Inbound PME', status: 'Prêt à envoyer', time: 'Séquence 4 · Jour 3' },
          { title: 'Dylan • Relance devis', status: 'En attente de validation', time: 'Séquence 2 · Jour 1' },
          { title: 'Allan • POC en cours', status: 'Envoyé + rappel prévu', time: 'Séquence 5 · Jour 6' }
        ],
        spotlight: {
          metric: 'Taux de réponse moyen',
          value: '38%',
          delta: '+6 pts vs dernier mois'
        },
        visual: {
          playbookTitle: 'Playbook en cours',
          playbookName: 'Relance deals ouverts',
          status: 'Live',
          prioritiesTitle: 'Priorités du jour'
        }
      },
      proof: {
        eyebrow: 'Ils nous font confiance',
        metrics: [
          { value: '+2 400', label: 'équipes B2B', detail: 'Sales, success et growth' },
          { value: '34%', label: 'de temps gagné', detail: 'en moyenne après 30 jours' }
        ],
        rating: { score: '4.8', detail: 'Score moyen G2 et Capterra' }
      },
      features: {
        eyebrow: 'Fonctionnalités clés',
        title: 'Tout ce qu'il faut pour piloter vos relances sans friction',
        description: 'Une plateforme qui orchestre les relances, alerte vos équipes et garde votre CRM parfaitement à jour.',
        items: [
          {
            title: 'Orchestration multi-canal',
            description: 'Emails, tâches LinkedIn et rappels téléphoniques déclenchés au bon moment selon le pipeline.',
            icon: 'i-heroicons-sparkles',
            tag: 'Playbooks',
            points: ['Templates validés par des équipes B2B', 'Timing optimisé sur chaque étape']
          },
          {
            title: 'Sync CRM en temps réel',
            description: 'Mises à jour et logs automatiques : plus de copie/coller ni d'oublis dans HubSpot, Pipedrive ou Salesforce.',
            icon: 'i-heroicons-arrow-path-rounded-square',
            tag: 'Ops',
            points: ['Création de tâches et champs custom', 'Suppression auto des contacts hors opt-in']
          },
          {
            title: 'Alertes sur les signaux chauds',
            description: 'Slack et email préviennent l'équipe quand un prospect ouvre, clique ou répond.',
            icon: 'i-heroicons-bell-alert',
            points: ['Scores de priorité mis à jour en continu', 'Notifications ciblées par équipe']
          },
          {
            title: 'IA de personnalisation prête à l'emploi',
            description: 'Résumé des fiches CRM, suggestions d'angles et rédaction contextualisée en un clic.',
            icon: 'i-heroicons-cpu-chip',
            tag: 'Assistant IA',
            points: ['Ton ajustable par persona', 'Contrôles humains avant envoi']
          },
          {
            title: 'Vue équipe et market fit',
            description: 'Dashboards prêts : suivi par segment, par séquence et par AE.',
            icon: 'i-heroicons-chart-bar-square',
            points: ['KPIs temps réel', 'Comparaison des playbooks actifs']
          },
          {
            title: 'Sécurité & conformité natives',
            description: 'Hébergement UE, permissions granulaires et audit trail complet pour chaque action.',
            icon: 'i-heroicons-shield-check',
            tag: 'Confiance',
            points: ['Gestion fine des rôles', 'Exports sécurisés sur demande']
          }
        ]
      },
      benefits: {
        eyebrow: 'Proposition de valeur',
        title: 'Pourquoi choisir MyApp pour vos relances B2B ?',
        description: 'Chaque bloc est pensé pour réduire la friction : tout est prêt, connecté à votre CRM et optimisé pour que vos équipes passent moins de temps à relancer et plus à signer.',
        items: [
          {
            title: 'Réduisez le temps de relance de 60%',
            description: 'Playbooks prêts pour chaque moment du cycle : devis, POC, renouvellement, relances inbound.',
            proof: '10 minutes pour lancer une séquence complète.',
            icon: '⏱️'
          },
          {
            title: 'Personnalisation sans tableur',
            description: 'L'IA résume la fiche CRM, détecte les signaux clés et génère les messages contextualisés.',
            proof: '+34% de réponses sur les campagnes personnalisées.',
            icon: '🧠'
          },
          {
            title: 'Priorités claires pour les SDR',
            description: 'Scoring en temps réel, tasks auto et alertes Slack pour concentrer l'équipe là où ça chauffe.',
            proof: 'Vos 10 deals les plus chauds chaque matin.',
            icon: '🎯'
          },
          {
            title: 'Ops et conformité sereines',
            description: 'Sync bidirectionnelle avec votre CRM, gestion des opt-in, suppression automatique sur demande.',
            proof: 'Aucune double saisie ni contact hors opt-in.',
            icon: '🛡️'
          }
        ]
      },
      how: {
        eyebrow: 'Comment ça marche',
        title: '3 étapes pour lancer vos relances sans tableur',
        description: 'Pas de bricolage : on connecte vos outils, on active un playbook validé et vous suivez les résultats en direct.',
        steps: [
          {
            tag: 'Étape 1',
            title: 'Connectez vos outils',
            text: 'HubSpot, Pipedrive, Salesforce ou votre CRM maison via API.',
            points: ['Import des contacts et deals en 1 clic', 'Nettoyage automatique des doublons', 'Scoring activé dès la synchro']
          },
          {
            tag: 'Étape 2',
            title: 'Choisissez un playbook validé',
            text: 'Séquences emails, LinkedIn et tâches manuelles prêtes pour chaque cas.',
            points: ['Templates validés par des équipes B2B', 'Personnalisation générée à partir du CRM', 'Timing optimisé selon votre cycle']
          },
          {
            tag: 'Étape 3',
            title: 'Suivez les résultats en direct',
            text: 'La plateforme relance, notifie et met à jour votre CRM pour vous.',
            points: ['Alertes sur les signaux chauds', 'Dashboard par équipe et par marché', 'Recommandations d'étapes suivantes']
          }
        ]
      },
      socialProof: {
        eyebrow: 'Preuve sociale',
        title: 'Ils ont supprimé la friction dans leurs relances',
        description: 'Des équipes sales, success et growth qui ont besoin de visibilité et d'actions guidées chaque jour.',
        testimonials: [
          {
            quote: 'On a doublé nos prises de RDV en 6 semaines sans recruter.',
            result: '+52% de réponses sur les séquences multi-canal',
            name: 'Claire Dumont',
            role: 'Head of Sales, Alto'
          },
          {
            quote: 'Les SDR savent quoi faire chaque matin, les relances sont déjà prêtes.',
            result: '-11 h par semaine de tâches répétitives',
            name: 'Yanis Karim',
            role: 'CEO, Neostack'
          },
          {
            quote: 'On a enfin une vue fiable des relances en cours et de leur impact.',
            result: '+18% de conversion MQL > SQL en 2 mois',
            name: 'Leila Haddad',
            role: 'RevOps, NovaTech'
          }
        ]
      },
      faq: {
        eyebrow: 'Objections fréquentes',
        title: 'On répond avant que vous ne posiez la question',
        description: 'Tarifs, délai de mise en route, sécurité : voici les réponses rapides pour décider sereinement.',
        note: 'Un CSM vous accompagne sur les 30 premiers jours pour garantir un déploiement sans friction.',
        items: [
          {
            question: 'Combien de temps pour démarrer ?',
            answer: 'En moins de 30 minutes : connexion CRM, import des modèles si besoin et activation d'un playbook.'
          },
          {
            question: 'Quelles intégrations sont disponibles ?',
            answer: 'HubSpot, Pipedrive, Salesforce, Google Sheets, Zapier et webhooks pour vos outils internes.'
          },
          {
            question: 'Puis-je garder mes modèles existants ?',
            answer: 'Oui, import Markdown ou CSV. On vous aide à les convertir en playbooks avec personnalisation automatique.'
          },
          {
            question: 'Et la conformité / RGPD ?',
            answer: 'Données hébergées dans l'UE, logs complets, suppression automatique sur demande et gestion fine des opt-in.'
          },
          {
            question: 'Y a-t-il un engagement ?',
            answer: 'Non. Essai gratuit, puis abonnement mensuel. Annulation en un clic depuis l'espace client.'
          },
          {
            question: 'Comment êtes-vous différent d'un simple outil d'e-mailing ?',
            answer: 'Nous pilotons la relance multi-canal, synchronisée au CRM et avec scoring temps réel. L'outil d'e-mailing est juste un des canaux.'
          }
        ]
      },
      pricing: {
        eyebrow: 'Offre',
        title: 'Un seul objectif : lancer vos playbooks rapidement',
        description: 'Choisissez le plan qui vous correspond. Même CTA partout pour garder l'objectif clair.',
        plans: [
          {
            name: 'Starter',
            description: 'Pour lancer vos premiers playbooks avec une petite équipe.',
            price: '39€',
            period: '/utilisateur/mois',
            features: [
              'Séquences illimitées email + LinkedIn',
              'Connecteurs HubSpot & Pipedrive',
              'Scoring deals chauds + alertes',
              'Support email et base de connaissances'
            ],
            note: 'Idéal pour 1 à 3 personnes.',
            ctaLabel: 'Essayer gratuitement'
          },
          {
            name: 'Growth',
            description: 'Pour les équipes qui relancent à grande échelle.',
            price: '89€',
            period: '/utilisateur/mois',
            features: [
              'Playbooks multi-équipes + rôles',
              'Salesforce & webhooks personnalisés',
              'Insights en temps réel + alertes Slack',
              'CSM dédié et atelier onboarding'
            ],
            note: 'Support prioritaire inclus.',
            popular: true,
            ctaLabel: 'Essayer gratuitement'
          }
        ]
      },
      finalCta: {
        eyebrow: 'On se lance ?',
        title: 'Essayez MyApp et gagnez vos prochaines signatures dès cette semaine.',
        description: 'Connectez votre CRM, choisissez un playbook, la plateforme s'occupe des relances et des rappels.',
        note: 'Sans carte bancaire • Annulation en 1 clic',
        points: [
          'Playbooks prêts pour relancer dès aujourd'hui',
          'Personnalisation automatique sans tableur',
          'Support humain en français'
        ],
        panel: {
          title: 'Vous entrez, on s'occupe du reste',
          rows: [
            { label: 'Check', text: "Playbooks prêts à l'emploi" },
            { label: 'Sync', text: 'CRM connecté, score temps réel' },
            { label: 'Ship', text: 'Relances envoyées cette semaine', metric: '484' }
          ]
        }
      },
      footer: {
        tagline: 'La plateforme de relance qui enlève la friction aux équipes B2B.',
        chips: ['RGPD-ready', 'Support en français'],
        columns: {
          product: {
            title: 'Produit',
            links: [
              { label: 'Bénéfices', href: '#benefits' },
              { label: 'Comment ça marche', href: '#how-it-works' },
              { label: 'Tarifs', href: '#pricing' },
              { label: 'FAQ', href: '#faq' }
            ]
          },
          resources: {
            title: 'Ressources',
            links: [
              { label: 'Témoignages', href: '#temoignages' },
              { label: 'Preuves', href: '#preuve' },
              { label: 'Guides', href: '#' },
              { label: 'Webinars', href: '#' }
            ]
          },
          contact: {
            title: 'Contact',
            links: [
              { label: 'hello@myapp.com', href: 'mailto:hello@myapp.com' },
              { label: '+33 1 02 03 04 05', href: 'tel:+33102030405' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Slack communauté', href: '#' }
            ]
          }
        },
        bottom: {
          rights: '© {year} MyApp. Tous droits réservés.',
          legal: ['Sécurité', 'Politique de confidentialité', 'CGU']
        }
      }
    },
    auth: {
      common: {
        email: 'Adresse e-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmez le mot de passe',
        emailPlaceholder: 'vous@example.com',
        passwordPlaceholder: '••••••••'
      },
      errors: {
        invalidCredentials: 'Email ou mot de passe invalide',
        passwordMismatch: 'Les mots de passe ne correspondent pas',
        passwordLength: 'Le mot de passe doit contenir au moins 6 caractères',
        registrationFailed: 'Inscription échouée. L'e-mail est peut-être déjà utilisé.'
      },
      login: {
        eyebrow: 'Bienvenue',
        title: 'Connectez-vous pour continuer.',
        description: 'Une authentification moderne avec des parcours guidés et un tableau de bord clair.',
        highlights: ['Authentification sécurisée', 'Accès simple aux fonctionnalités', 'Interface intuitive'],
        panelStats: [
          { value: '99%', label: 'Disponibilité' },
          { value: '24/7', label: 'Support' }
        ],
        formTitle: 'Connexion',
        subtitlePrefix: 'ou',
        subtitleLink: 'créer un compte',
        submit: 'Connexion'
      },
      register: {
        eyebrow: 'On démarre',
        title: 'Créez votre compte dès aujourd'hui.',
        description: 'Configurez MyApp en quelques minutes et alignez votre équipe dès le premier jour.',
        perks: ['Playbooks prêts à l'emploi', 'Onboarding guidé', 'Sécurité par défaut', 'Compatible avec votre CRM'],
        milestones: [
          { time: 'Étape 1', title: 'Compte configuré' },
          { time: 'Étape 2', title: 'Première action réalisée' },
          { time: 'Étape 3', title: 'Prêt à être utilisé' }
        ],
        formTitle: 'Inscription',
        subtitlePrefix: 'Déjà un compte ?',
        subtitleLink: 'Se connecter',
        submit: 'Créer le compte'
      }
    },
    dashboard: {
      menu: {
        overview: 'Vue d\'ensemble',
        analytics: 'Analyses',
        reports: 'Rapports',
        insights: 'Insights',
        users: 'Utilisateurs',
        allUsers: 'Tous les utilisateurs',
        roles: 'Rôles',
        settings: 'Paramètres'
      },
      overview: {
        eyebrow: 'Poste de commande',
        title: 'Bon retour 👋',
        intro: 'Voici votre pouls produit + revenu en direct. Tout est responsive, le cockpit suit sur tous les écrans.',
        highlights: [
          'Anomalies d\'usage détectées automatiquement',
          'L\'IA met à jour les notes pipeline dans Slack',
          'Expérimentations suivies sur tous les devices'
        ],
        chips: {
          arr: 'ARR',
          nrr: 'NRR',
          experiments: 'Expériences'
        },
        actions: {
          viewSettings: 'Voir les paramètres',
          viewReports: 'Voir les rapports'
        },
        trend: {
          title: 'Tendance ARR',
          value: '$2.4M',
          change: '+18,4%',
          footer: 'Prévision verrouillée • Prochaine revue vendredi'
        },
        priority: {
          title: 'File de priorités',
          viewAll: 'Tout voir',
          tasks: [
            {
              title: 'Renouvellement Enterprise',
              detail: 'Acme Inc. arrive à échéance dans 6 jours',
              action: 'Ouvrir la room'
            },
            {
              title: 'Pic d\'usage',
              detail: 'Orbit analytics ↑ 42% semaine sur semaine',
              action: 'Alerter les reps'
            },
            {
              title: 'Segment dormant',
              detail: '12 workspaces inactifs depuis 30 jours',
              action: 'Revoir le copy'
            }
          ]
        },
        stats: [
          { label: 'Pipeline influencé', change: '+12,4%' },
          { label: 'Comptes à risque', change: '-5 cette semaine' },
          { label: 'Parcours live', change: '+3 lancés' },
          { label: 'Signaux traités', change: 'Temps réel' }
        ],
        playbooks: {
          eyebrow: 'Santé de l'automatisation',
          title: 'Playbooks actifs',
          action: 'Partager',
          '0': {
            name: 'Radar expansion',
            description: 'Repère les clients avec >20% de pic d\'usage',
            status: 'En cours'
          },
          '1': {
            name: 'Renewal autopilot',
            description: 'Orchestre un plan succès sur 90 jours',
            status: 'En cours'
          },
          '2': {
            name: 'Win-back dormant',
            description: 'L\'IA rédige les relances pour les équipes inactives',
            status: 'En pause'
          }
        },
        activity: {
          eyebrow: 'Activité',
          title: 'Timeline récente',
          list: [
            { title: 'Workspace créé', copy: 'Votre compte a été provisionné avec succès', time: 'Il y a 2 min' },
            { title: 'Segment synchronisé', copy: 'Métriques produit depuis Snowflake actualisées', time: 'Il y a 18 min' },
            { title: 'Playbook expédié', copy: 'Radar expansion poussé vers Salesforce', time: 'Il y a 1 h' }
          ]
        },
        integrations: {
          eyebrow: 'Intégrations',
          title: 'Sources de données live',
          list: [
            { name: 'Stripe', status: 'Facturation + factures', sync: 'Il y a 2 min' },
            { name: 'Snowflake', status: 'Entrepôt produit', sync: 'Il y a 5 min' },
            { name: 'HubSpot', status: 'CRM & deals', sync: 'Il y a 12 min' }
          ]
        }
      },
      settings: {
        title: 'Paramètres',
        description: 'Configurez les paramètres de votre application',
        cards: [
          { title: 'Profil', description: 'Mettez à jour vos informations personnelles' },
          { title: 'Notifications', description: 'Gérez les notifications email et push' },
          { title: 'Sécurité', description: 'Mot de passe et double authentification' }
        ]
      },
      pages: {
        analyticsReports: {
          title: 'Analytics - Rapports',
          description: 'Sous-page démo pour Analytics > Rapports',
          cards: [
            { title: 'Rapport revenus', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Rapport utilisateurs', description: 'Sed do eiusmod tempor incididunt ut labore et dolore.' }
          ]
        },
        analyticsInsights: {
          title: 'Analytics - Insights',
          description: 'Sous-page démo pour Analytics > Insights',
          cards: [
            { title: 'Métrique clé', description: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
            { title: 'Analyse de tendance', description: 'Duis aute irure dolor in reprehenderit in voluptate.' }
          ]
        },
        users: {
          title: 'Utilisateurs',
          description: 'Gérez tous les utilisateurs de votre application',
          cards: [
            { title: 'Total utilisateurs', metric: '1 234', tone: 'accent' },
            { title: 'Actifs aujourd'hui', metric: '567', tone: 'success' }
          ]
        },
        roles: {
          title: 'Rôles',
          description: 'Gérez les rôles et permissions',
          cards: [
            { title: 'Admin', description: 'Accès complet aux réglages et aux données' },
            { title: 'Éditeur', description: 'Peut éditer le contenu et les workflows' },
            { title: 'Lecteur', description: 'Accès lecture seule aux dashboards' }
          ]
        }
      }
    }
  }
}