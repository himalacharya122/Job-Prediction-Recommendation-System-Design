"use client"

import { useState } from "react"
import { Brain, Settings, CheckCircle, AlertCircle, Zap, Code2, Database, Rocket, ArrowRight } from "lucide-react"

const SystemDesign = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedPhase, setSelectedPhase] = useState(null)
  const [expandedDataset, setExpandedDataset] = useState(null)

  const datasets = [
    {
      name: "O*NET Occupational",
      files: 6,
      purpose: "Skill-job mapping foundation",
      key: ["Occupation Data", "Skills", "Knowledge", "Work Activities", "Technology Skills", "Alternate Titles"],
      color: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    },
    {
      name: "AI Resume Screening",
      files: 1,
      purpose: "Structured resume + labeled roles",
      key: ["Resume_ID", "Skills", "Experience", "Education", "Job Role", "Salary"],
      color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
    },
    {
      name: "LinkedIn Job Postings",
      files: 6,
      purpose: "Real-world job market data",
      key: ["postings.csv", "job_skill.csv", "job_industries.csv", "salaries.csv", "skills.csv", "industries.csv"],
      color: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
    },
    {
      name: "Resume Dataset (Raw)",
      files: 1,
      purpose: "Unstructured text for NLP",
      key: ["resume text", "job labels"],
      color: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
    },
  ]

  const mlPipeline = [
    {
      phase: "Data Integration & Preprocessing",
      duration: "Week 1-2",
      tasks: [
        "Merge O*NET skills with LinkedIn job requirements",
        "Clean and normalize resume data (structured + unstructured)",
        "Handle missing values, duplicates",
        "Feature engineering: TF-IDF, skill embeddings",
        "Train-test split (80-20)",
      ],
      techniques: ["Pandas", "NLTK/spaCy", "Scikit-learn preprocessing"],
      icon: Database,
    },
    {
      phase: "Model Development",
      duration: "Week 3-5",
      tasks: [
        "Job Classification: Predict job role from resume",
        "Skill Matching: Cosine similarity between resume & job skills",
        "Salary Prediction: Regression based on skills + experience",
        "Recommendation Engine: Content-based + collaborative filtering",
      ],
      models: ["Random Forest", "XGBoost", "BERT/DistilBERT", "Neural Collaborative Filtering"],
      icon: Brain,
    },
    {
      phase: "Evaluation & Optimization",
      duration: "Week 6-7",
      tasks: [
        "Metrics: Accuracy, Precision, Recall, F1, RMSE (salary)",
        "Cross-validation",
        "Hyperparameter tuning (GridSearch/RandomSearch)",
        "Ablation study: impact of different feature sets",
        "Error analysis: common failure modes",
      ],
      deliverables: ["Confusion matrices", "ROC curves", "Feature importance plots"],
      icon: Zap,
    },
    {
      phase: "Application Development",
      duration: "Week 8-10",
      tasks: [
        "Build Flask/FastAPI backend",
        "Create React/Streamlit frontend",
        "Integrate trained models via pickle/joblib",
        "Deploy on Heroku/Render/Railway",
        "Add resume upload + job search features",
      ],
      tech: ["Flask/FastAPI", "React/Streamlit", "Docker", "Cloud hosting"],
      icon: Code2,
    },
  ]

  const systemArchitecture = {
    layers: [
      {
        name: "Data Layer",
        components: ["O*NET DB", "LinkedIn Jobs", "Resume Corpus", "Skill Taxonomy"],
        gradient: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
      },
      {
        name: "Feature Engineering",
        components: ["Text Preprocessing", "Skill Extraction", "Embeddings (Word2Vec/BERT)", "Feature Scaling"],
        gradient: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
      },
      {
        name: "ML Models",
        components: ["Job Classifier", "Skill Matcher", "Salary Predictor", "Recommender System"],
        gradient: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
      },
      {
        name: "Application Layer",
        components: ["REST API", "Web Interface", "Resume Parser", "Job Search Engine"],
        gradient: "from-amber-500/10 to-amber-500/5 border-amber-500/20",
      },
    ],
  }

  const evaluationMetrics = [
    { model: "Job Classifier", metrics: ["Accuracy", "Precision", "Recall", "F1-Score", "Confusion Matrix"] },
    { model: "Skill Matcher", metrics: ["Cosine Similarity", "Precision@K", "Recall@K", "MAP"] },
    { model: "Salary Predictor", metrics: ["RMSE", "MAE", "R² Score"] },
    { model: "Recommender", metrics: ["NDCG", "Precision@10", "Diversity Score"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      {/* Background grid effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-300">Advanced ML System</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Job Prediction & Recommendation System
          </h1>
          <p className="text-lg text-neutral-400 mb-6">
            BSc (Hons) AI - Year 3 Group Project. A comprehensive ML solution combining NLP, classification, and
            recommendation systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-200 text-sm font-medium">
              ML Solution + Deployable App
            </span>
            <span className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-200 text-sm font-medium">
              4 Datasets • 13 Files
            </span>
            <span className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-200 text-sm font-medium">
              Production Ready
            </span>
          </div>
        </div>

        {/* Navigation Tabs - Redesigned */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {["overview", "datasets", "pipeline", "architecture", "evaluation"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-neutral-800/50 border border-neutral-700 text-neutral-400 hover:bg-neutral-700/50 hover:border-neutral-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="space-y-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Core ML Tasks Card */}
                <div className="group rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-start gap-3 mb-6">
                    <Brain className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-blue-200">Core ML Tasks</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Job Classification", desc: "Predict job role from resume text" },
                      { title: "Skill Matching", desc: "Match candidate skills to job requirements" },
                      { title: "Salary Prediction", desc: "Estimate salary based on profile" },
                      { title: "Job Recommendation", desc: "Suggest top-K relevant jobs" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-neutral-100">{item.title}</strong>
                          <p className="text-sm text-neutral-400 mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Stack Card */}
                <div className="group rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start gap-3 mb-6">
                    <Settings className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-purple-200">Technical Stack</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong className="text-neutral-100 block mb-1">ML/NLP</strong>
                      <p className="text-neutral-400">Scikit-learn, XGBoost, NLTK/spaCy, Transformers (BERT)</p>
                    </div>
                    <div>
                      <strong className="text-neutral-100 block mb-1">Data Processing</strong>
                      <p className="text-neutral-400">Pandas, NumPy, Feature-engine</p>
                    </div>
                    <div>
                      <strong className="text-neutral-100 block mb-1">Backend</strong>
                      <p className="text-neutral-400">Flask/FastAPI, Docker</p>
                    </div>
                    <div>
                      <strong className="text-neutral-100 block mb-1">Frontend</strong>
                      <p className="text-neutral-400">React or Streamlit</p>
                    </div>
                    <div>
                      <strong className="text-neutral-100 block mb-1">Deployment</strong>
                      <p className="text-neutral-400">Heroku/Render/Railway</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why This Project Excels */}
              <div className="rounded-xl bg-gradient-to-r from-amber-500/10 via-green-500/10 to-amber-500/10 border border-amber-500/20 p-8">
                <h3 className="text-2xl font-bold text-amber-200 mb-6">Why This Project Excels</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Real-World Impact", desc: "Addresses actual hiring challenges & career guidance" },
                    { title: "Technical Depth", desc: "Multiple models, NLP, recommendation systems" },
                    { title: "Deployable Product", desc: "Full-stack app, not just a notebook" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-neutral-800/50 border border-neutral-700">
                      <h4 className="font-bold text-neutral-100 mb-2">{item.title}</h4>
                      <p className="text-sm text-neutral-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "datasets" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Dataset Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {datasets.map((dataset, idx) => (
                  <div
                    key={idx}
                    onClick={() => setExpandedDataset(expandedDataset === idx ? null : idx)}
                    className={`rounded-xl border p-6 cursor-pointer transition-all ${dataset.color} bg-gradient-to-br hover:shadow-lg hover:shadow-blue-500/10`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-neutral-100">{dataset.name}</h3>
                      <span className="px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700 text-xs font-medium text-neutral-300">
                        {dataset.files} file{dataset.files > 1 ? "s" : ""}
                      </span>
                    </div>
                    <p className="text-neutral-400 mb-4 font-medium">{dataset.purpose}</p>
                    {expandedDataset === idx && (
                      <div className="mt-4 pt-4 border-t border-neutral-700/50">
                        <strong className="text-sm text-neutral-300">Key Fields/Files:</strong>
                        <ul className="mt-3 space-y-2">
                          {dataset.key.map((item, i) => (
                            <li key={i} className="text-sm text-neutral-400 flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-blue-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Data Integration Strategy */}
              <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 p-8">
                <div className="flex items-start gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-cyan-200">Data Integration Strategy</h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "Use O*NET to build skill taxonomy & job-skill mappings",
                    "Merge LinkedIn job postings with O*NET skills via skill matching",
                    "Parse raw resumes (Dataset 4) to extract skills using NLP",
                    "Use structured resume data (Dataset 2) to train job classifier",
                    "Combine all for recommendation engine training",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-xs font-bold text-cyan-300">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {activeTab === "pipeline" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">ML Pipeline & Development Phases</h2>
              <div className="space-y-4">
                {mlPipeline.map((phase, idx) => {
                  const PhaseIcon = phase.icon
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedPhase(selectedPhase === idx ? null : idx)}
                      className={`rounded-xl border p-6 cursor-pointer transition-all ${
                        selectedPhase === idx
                          ? "bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-blue-500/40 shadow-lg shadow-blue-500/20"
                          : "bg-neutral-800/30 border-neutral-700 hover:bg-neutral-800/50 hover:border-neutral-600"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <PhaseIcon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-neutral-100">
                              Phase {idx + 1}: {phase.phase}
                            </h3>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-neutral-700/50 border border-neutral-600 text-xs font-medium text-neutral-300">
                          {phase.duration}
                        </span>
                      </div>

                      {selectedPhase === idx && (
                        <div className="mt-6 pt-6 border-t border-neutral-700/50 space-y-4">
                          <div>
                            <strong className="text-neutral-100">Tasks</strong>
                            <ul className="mt-3 space-y-2">
                              {phase.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {phase.techniques && (
                            <div className="p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
                              <strong className="text-neutral-200 text-sm block">Techniques/Tools</strong>
                              <p className="text-neutral-400 text-sm mt-1">{phase.techniques.join(", ")}</p>
                            </div>
                          )}

                          {phase.models && (
                            <div className="p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
                              <strong className="text-neutral-200 text-sm block">Models</strong>
                              <p className="text-neutral-400 text-sm mt-1">{phase.models.join(", ")}</p>
                            </div>
                          )}

                          {phase.deliverables && (
                            <div className="p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
                              <strong className="text-neutral-200 text-sm block">Deliverables</strong>
                              <p className="text-neutral-400 text-sm mt-1">{phase.deliverables.join(", ")}</p>
                            </div>
                          )}

                          {phase.tech && (
                            <div className="p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
                              <strong className="text-neutral-200 text-sm block">Tech Stack</strong>
                              <p className="text-neutral-400 text-sm mt-1">{phase.tech.join(", ")}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">System Architecture (4-Layer Design)</h2>
              <div className="space-y-4">
                {systemArchitecture.layers.map((layer, idx) => (
                  <div key={idx} className={`rounded-xl border p-6 bg-gradient-to-br ${layer.gradient}`}>
                    <h3 className="text-lg font-bold text-neutral-100 mb-4">{layer.name}</h3>
                    <div className="grid md:grid-cols-4 gap-3">
                      {layer.components.map((comp, i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-neutral-900/50 border border-neutral-700/50 p-3 text-center hover:bg-neutral-800/50 transition-colors"
                        >
                          <span className="text-sm font-medium text-neutral-300">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Flow */}
              <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 p-8">
                <h3 className="text-2xl font-bold text-purple-200 mb-6">Data Flow</h3>
                <div className="space-y-4">
                  {[
                    { num: 1, text: "User uploads resume → Resume Parser extracts text & skills" },
                    { num: 2, text: "Features engineered → Embeddings generated" },
                    { num: 3, text: "ML Models predict job role, match skills, estimate salary" },
                    { num: 4, text: "Recommender ranks jobs → API returns top-K matches to UI" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.num}
                      </div>
                      <span className="text-neutral-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "evaluation" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Evaluation Metrics & Experiments</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {evaluationMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-neutral-800/30 border border-neutral-700 p-6 hover:border-neutral-600 transition-all"
                  >
                    <h3 className="text-lg font-bold text-neutral-100 mb-4">{item.model}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs font-medium text-blue-200"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Experimental Design */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 p-8">
                  <h3 className="text-lg font-bold text-green-200 mb-4">Experimental Design</h3>
                  <ul className="space-y-2 text-neutral-400 text-sm">
                    <li>• Baseline: Simple TF-IDF + Logistic Regression</li>
                    <li>• Advanced: BERT embeddings + Neural Networks</li>
                    <li>• Ablation: Remove skill features, test impact</li>
                    <li>• Cross-validation: 5-fold CV for robustness</li>
                    <li>• Hyperparameter optimization: GridSearch/RandomSearch</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 p-8">
                  <h3 className="text-lg font-bold text-cyan-200 mb-4">Success Criteria</h3>
                  <ul className="space-y-2 text-neutral-400 text-sm">
                    <li>✓ Job Classifier: F1-Score {">"} 0.85</li>
                    <li>✓ Skill Matcher: Precision@K {">"} 0.80</li>
                    <li>✓ Salary Predictor: R² Score {">"} 0.75</li>
                    <li>✓ Recommendation System: NDCG@10 {">"} 0.70</li>
                    <li>✓ Deployment: API response {"<"} 500ms</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SystemDesign
