import React, { useState } from 'react';
import { AlertCircle, CheckCircle, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const DataProductGame = () => {
  const [gameState, setGameState] = useState({
    quarter: 1,
    trust: 50,
    adoption: 20,
    governance: 30,
    speed: 40,
    budget: 100,
    stakeholderSentiment: 60,
    completedInitiatives: [],
    activeChallenge: null,
    gameOver: false,
    finalScore: 0
  });

  const challenges = [
    {
      id: 1,
      quarter: 1,
      title: "The Executive Ask: 'Show Me Value in 90 Days'",
      description: "Your CEO wants to see concrete results fast. The team is pushing for comprehensive governance first. What's your move?",
      options: [
        {
          text: "Launch a quick-win MVP data product for one critical domain",
          impact: { trust: 10, adoption: 15, speed: 20, governance: -5, budget: -15, stakeholderSentiment: 15 },
          outcome: "Smart! Early value builds momentum. Governance can catch up as you scale."
        },
        {
          text: "Build the full governance framework and certification process first",
          impact: { trust: 5, adoption: -10, speed: -15, governance: 25, budget: -25, stakeholderSentiment: -10 },
          outcome: "Solid foundation, but stakeholders are getting impatient. Speed matters early."
        },
        {
          text: "Run parallel tracks: one quick MVP + lightweight governance",
          impact: { trust: 15, adoption: 10, speed: 10, governance: 10, budget: -20, stakeholderSentiment: 10 },
          outcome: "Balanced approach! You're threading the needle between speed and sustainability."
        }
      ]
    },
    {
      id: 2,
      quarter: 2,
      title: "Data Quality Crisis: Source Systems Are Messy",
      description: "Teams discover source data quality is worse than expected. Some want to delay launch, others say 'ship it and fix later'.",
      options: [
        {
          text: "Implement SDQ (Source Data Quality) checks at ingestion immediately",
          impact: { trust: 20, adoption: -5, speed: -10, governance: 15, budget: -15, stakeholderSentiment: 5 },
          outcome: "Excellent! Quality at ingestion prevents downstream chaos. Users will trust your products."
        },
        {
          text: "Ship now, add quality checks iteratively based on user complaints",
          impact: { trust: -15, adoption: 10, speed: 15, governance: -10, budget: -5, stakeholderSentiment: -10 },
          outcome: "Risky! Trust erodes fast when users find bad data. Recovery is expensive."
        },
        {
          text: "Create a tiered approach: bronze/silver/gold certification levels",
          impact: { trust: 15, adoption: 5, speed: 5, governance: 20, budget: -10, stakeholderSentiment: 10 },
          outcome: "Smart compromise! Users know what they're getting, and you can iterate quality upward."
        }
      ]
    },
    {
      id: 3,
      quarter: 3,
      title: "Silos Clash: Each Business Unit Wants Their Own Standards",
      description: "Marketing, Sales, and Finance all define 'Customer' differently. Chaos is brewing. How do you unify them?",
      options: [
        {
          text: "Force enterprise-wide semantic standards immediately",
          impact: { trust: -10, adoption: -15, speed: -5, governance: 20, budget: -10, stakeholderSentiment: -20 },
          outcome: "Too heavy-handed! Business units revolt. Semantic coherence needs buy-in, not mandates."
        },
        {
          text: "Create a Semantic Layer with governed 'golden definitions' and federated input",
          impact: { trust: 20, adoption: 15, speed: 0, governance: 25, budget: -20, stakeholderSentiment: 20 },
          outcome: "Perfect! Federated governance with central coherence. This is exactly what Chapter 8 preaches."
        },
        {
          text: "Let each domain keep their definitions, add mapping layers",
          impact: { trust: -5, adoption: 5, speed: 10, governance: -15, budget: -5, stakeholderSentiment: -5 },
          outcome: "Short-term fix, long-term nightmare. Technical debt compounds fast without semantic coherence."
        }
      ]
    },
    {
      id: 4,
      quarter: 4,
      title: "The AI/ML Team Wants In: 'Can Your Platform Handle Our Workloads?'",
      description: "Data scientists need feature stores, real-time inference, and experimental data. Your platform wasn't designed for this scale.",
      options: [
        {
          text: "Say 'not yet' and focus on stabilizing current data products",
          impact: { trust: 5, adoption: -10, speed: 5, governance: 10, budget: 0, stakeholderSentiment: -15 },
          outcome: "Safe but limiting. You're missing a massive opportunity to extend your platform's value."
        },
        {
          text: "Build extensibility into the platform architecture now (Chapter 7 approach)",
          impact: { trust: 10, adoption: 20, speed: -10, governance: 5, budget: -25, stakeholderSentiment: 25 },
          outcome: "Strategic investment! Extensibility separates good platforms from great ones."
        },
        {
          text: "Partner with AI team to co-create an AI-ready data product pilot",
          impact: { trust: 15, adoption: 25, speed: 0, governance: 10, budget: -20, stakeholderSentiment: 30 },
          outcome: "Brilliant collaboration! You're proving the platform's versatility and building powerful allies."
        }
      ]
    },
    {
      id: 5,
      quarter: 5,
      title: "Scale or Stall: Adoption Is Plateauing at 40%",
      description: "Early adopters love it, but the majority hasn't migrated from legacy reports. Change management is struggling.",
      options: [
        {
          text: "Launch aggressive training and 'Data Product Champions' program",
          impact: { trust: 5, adoption: 20, speed: -5, governance: 5, budget: -15, stakeholderSentiment: 15 },
          outcome: "Good grassroots approach! Champions drive adoption from within. See Chapter 10."
        },
        {
          text: "Mandate migration: sunset legacy systems with 90-day notice",
          impact: { trust: -15, adoption: 15, speed: 10, governance: 5, budget: -5, stakeholderSentiment: -25 },
          outcome: "Too forceful! Resentment builds. Change management requires empathy, not mandates."
        },
        {
          text: "Create compelling success stories and executive sponsorship for visibility",
          impact: { trust: 15, adoption: 25, speed: 5, governance: 0, budget: -10, stakeholderSentiment: 25 },
          outcome: "Excellent! Social proof and top-down support create momentum. This is the way."
        }
      ]
    },
    {
      id: 6,
      quarter: 6,
      title: "Budget Cuts: CFO Says 'Prove the ROI or Lose 30% Funding'",
      description: "Economic headwinds force cost scrutiny. You need to demonstrate tangible business value, fast.",
      options: [
        {
          text: "Show reduced time-to-insight metrics and operational efficiency gains",
          impact: { trust: 10, adoption: 5, speed: 0, governance: 0, budget: 15, stakeholderSentiment: 20 },
          outcome: "Solid! Quantifiable metrics matter to finance. You've been tracking the right KPIs."
        },
        {
          text: "Highlight data quality improvements and regulatory compliance value",
          impact: { trust: 15, adoption: 0, speed: 0, governance: 15, budget: 10, stakeholderSentiment: 15 },
          outcome: "Good defensive play. Compliance value is real but harder to quantify as revenue impact."
        },
        {
          text: "Present revenue-impacting use cases: better customer insights, faster product decisions",
          impact: { trust: 20, adoption: 10, speed: 5, governance: 0, budget: 25, stakeholderSentiment: 30 },
          outcome: "Perfect! Revenue impact speaks loudest. You've connected data products to business outcomes."
        }
      ]
    }
  ];

  const handleChoice = (option) => {
    const newState = { ...gameState };
    
    Object.keys(option.impact).forEach(key => {
      newState[key] = Math.max(0, Math.min(100, newState[key] + option.impact[key]));
    });

    newState.completedInitiatives.push({
      quarter: newState.quarter,
      choice: option.text,
      outcome: option.outcome
    });

    newState.quarter += 1;
    newState.activeChallenge = null;

    if (newState.quarter > 6) {
      const finalScore = Math.round(
        (newState.trust * 0.25) +
        (newState.adoption * 0.3) +
        (newState.governance * 0.15) +
        (newState.speed * 0.1) +
        (newState.stakeholderSentiment * 0.2)
      );
      newState.gameOver = true;
      newState.finalScore = finalScore;
    }

    setGameState(newState);
  };

  const startChallenge = () => {
    const challenge = challenges.find(c => c.quarter === gameState.quarter);
    setGameState({ ...gameState, activeChallenge: challenge });
  };

  const resetGame = () => {
    setGameState({
      quarter: 1,
      trust: 50,
      adoption: 20,
      governance: 30,
      speed: 40,
      budget: 100,
      stakeholderSentiment: 60,
      completedInitiatives: [],
      activeChallenge: null,
      gameOver: false,
      finalScore: 0
    });
  };

  const getScoreRating = (score) => {
    if (score >= 80) return { label: "Exceptional Leader", color: "text-green-600", message: "You've mastered the art of building enterprise data products! Your book will resonate deeply." };
    if (score >= 65) return { label: "Strong Executor", color: "text-blue-600", message: "Solid execution with room to optimize. You understand the tradeoffs well." };
    if (score >= 50) return { label: "Steady Progress", color: "text-yellow-600", message: "You're learning the balance. More focus on adoption and trust will accelerate success." };
    return { label: "Needs Recalibration", color: "text-red-600", message: "Strategic missteps added up. Review Chapters 2, 6, and 10 for better frameworks." };
  };

  if (gameState.gameOver) {
    const rating = getScoreRating(gameState.finalScore);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Journey Complete!</h1>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className={`text-5xl font-bold ${rating.color} mb-2`}>{gameState.finalScore}</div>
              <div className="text-2xl font-semibold text-slate-700 mb-2">{rating.label}</div>
              <div className="text-slate-600">{rating.message}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-blue-600" size={20} />
                <span className="font-semibold text-slate-700">Trust</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">{gameState.trust}%</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-green-600" size={20} />
                <span className="font-semibold text-slate-700">Adoption</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{gameState.adoption}%</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-purple-600" size={20} />
                <span className="font-semibold text-slate-700">Governance</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">{gameState.governance}%</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="text-yellow-600" size={20} />
                <span className="font-semibold text-slate-700">Speed</span>
              </div>
              <div className="text-2xl font-bold text-yellow-600">{gameState.speed}%</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-indigo-600" size={20} />
                <span className="font-semibold text-slate-700">Stakeholders</span>
              </div>
              <div className="text-2xl font-bold text-indigo-600">{gameState.stakeholderSentiment}%</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💰</span>
                <span className="font-semibold text-slate-700">Budget</span>
              </div>
              <div className="text-2xl font-bold text-emerald-600">{gameState.budget}%</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Your Journey</h3>
            <div className="space-y-3">
              {gameState.completedInitiatives.map((init, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold text-slate-700">Q{init.quarter}: {init.choice}</div>
                  <div className="text-sm text-slate-600 mt-1">{init.outcome}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={resetGame}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  if (!gameState.activeChallenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Enterprise Data Products</h1>
            <h2 className="text-2xl text-slate-600 mb-4">The Strategic Journey</h2>
            <div className="text-lg text-slate-500">Quarter {gameState.quarter} of 6</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-blue-600" size={20} />
                <span className="font-semibold text-slate-700">Trust</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${gameState.trust}%` }}></div>
              </div>
              <div className="text-sm text-slate-600">{gameState.trust}%</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-green-600" size={20} />
                <span className="font-semibold text-slate-700">Adoption</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${gameState.adoption}%` }}></div>
              </div>
              <div className="text-sm text-slate-600">{gameState.adoption}%</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-purple-600" size={20} />
                <span className="font-semibold text-slate-700">Governance</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${gameState.governance}%` }}></div>
              </div>
              <div className="text-sm text-slate-600">{gameState.governance}%</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="text-yellow-600" size={20} />
                <span className="font-semibold text-slate-700">Speed</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${gameState.speed}%` }}></div>
              </div>
              <div className="text-sm text-slate-600">{gameState.speed}%</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-indigo-600" size={20} />
                <span className="font-semibold text-slate-700">Stakeholders</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${gameState.stakeholderSentiment}%` }}></div>
              </div>
              <div className="text-sm text-slate-600">{gameState.stakeholderSentiment}%</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💰</span>
                <span className="font-semibold text-slate-700">Budget</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${gameState.budget}%` }}></div>
              </div>
              <div className="text-sm text-slate-600">{gameState.budget}%</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg text-slate-800 mb-3">About This Game</h3>
            <p className="text-slate-600 mb-3">
              You're leading the enterprise data products initiative. Each quarter brings real challenges that mirror the topics in your book chapters.
            </p>
            <p className="text-slate-600">
              Your decisions impact trust, adoption, governance, speed, budget, and stakeholder sentiment. Balance competing priorities to build a sustainable data products program.
            </p>
          </div>

          <button
            onClick={startChallenge}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
          >
            Start Quarter {gameState.quarter}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-800">Quarter {gameState.quarter} of 6</h2>
            <div className="text-sm text-slate-500">Budget: {gameState.budget}%</div>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(gameState.quarter / 6) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-2">{gameState.activeChallenge.title}</h3>
              <p className="text-slate-700">{gameState.activeChallenge.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {gameState.activeChallenge.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(option)}
              className="w-full text-left bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 hover:border-blue-400 rounded-lg p-5 transition-all"
            >
              <div className="font-semibold text-slate-800 mb-2">{option.text}</div>
              <div className="flex flex-wrap gap-2 text-xs">
                {Object.entries(option.impact).map(([key, value]) => (
                  <span
                    key={key}
                    className={`px-2 py-1 rounded ${value > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {key}: {value > 0 ? '+' : ''}{value}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataProductGame;