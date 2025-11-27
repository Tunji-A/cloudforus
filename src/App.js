import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div>
          <div className="nav-brand">CloudForUs Technologies Ltd</div>
          <div className="nav-tagline">
            Build, modernize, and run with confidence on AWS.
          </div>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/solutions/migration-modernization" className="nav-link">
            Solutions
          </Link>
          <Link to="/industries/startups" className="nav-link">
            Industries
          </Link>
          <Link to="/programs" className="nav-link">
            Programs
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-cta">
            Book a consult
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <span>© {new Date().getFullYear()} CloudForUs Technologies Ltd.</span>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          “AWS” and all AWS service names are trademarks of Amazon Web Services,
          Inc. or its affiliates. CloudForUs is an independent service provider.
        </div>
      </div>
    </footer>
  );
}

/* HOME */

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-kicker">
              Cloud consulting • AWS-aligned delivery
            </div>
            <h1 className="hero-title">
              <span>Build, modernize, and run on AWS</span> with confidence.
            </h1>
            <p className="hero-sub">
              CloudForUs helps you plan, migrate, and operate your workloads on
              AWS — with security, reliability, and cost optimization built in
              from day one.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Book a free cloud consult
              </Link>
              <Link
                to="/programs"
                className="btn btn-secondary"
                title="Explore programs"
              >
                Explore programs & accelerators
              </Link>
            </div>
            <div className="hero-proofs">
              <strong>What we typically help with:</strong>
              <ul>
                <li>First-time migrations & replatforming to AWS</li>
                <li>Landing zones, DevOps, and platform engineering</li>
                <li>Data, analytics, and GenAI proof-of-concepts</li>
                <li>Security, compliance, and cost optimization</li>
              </ul>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-badge">
              <span>CloudForUs Technologies Ltd</span>
              <span>•</span>
              <span>AWS-focused services</span>
            </div>
            <h2>
              From migration waves to GenAI pilots — one team, one playbook.
            </h2>
            <p className="muted">
              We bring architects, DevOps engineers, data specialists, and
              security experts together as one delivery team so you can move
              faster on AWS without losing governance or visibility.
            </p>
            <div className="chips">
              <span className="chip">Migration & Modernization</span>
              <span className="chip">Landing Zones & Governance</span>
              <span className="chip">Data & Analytics</span>
              <span className="chip">GenAI on AWS</span>
              <span className="chip">Security & FinOps</span>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="section section-metrics">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">25+</div>
              <div className="metric-label">Cloud projects delivered</div>
              <p className="metric-sub">
                From first AWS workloads to multi-account environments.
              </p>
            </div>
            <div className="metric-card">
              <div className="metric-value">99.9%</div>
              <div className="metric-label">SLO-focused architectures</div>
              <p className="metric-sub">
                Reliability, observability, and operations baked into design.
              </p>
            </div>
            <div className="metric-card">
              <div className="metric-value">3</div>
              <div className="metric-label">Core industries</div>
              <p className="metric-sub">
                Startups, digital businesses, and public sector teams.
              </p>
            </div>
            <div className="metric-card">
              <div className="metric-value">24/7</div>
              <div className="metric-label">Ops-ready support</div>
              <p className="metric-sub">
                SRE-style runbooks and monitoring for production workloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY STRIP */}
      <section className="section section-trust">
        <div className="container">
          <div className="trust-inner">
            <div className="trust-text">
              <p className="trust-kicker">Trusted by digital teams</p>
              <h2>Cloud outcomes for builders across Africa and beyond.</h2>
              <p>
                We partner with founders, product teams, and IT leaders who are
                modernizing finance, education, logistics, and public services
                on AWS.
              </p>
            </div>
            <div className="trust-logos">
              <div className="trust-logo">Fintech startup</div>
              <div className="trust-logo">SaaS platform</div>
              <div className="trust-logo">Public sector unit</div>
              <div className="trust-logo trust-logo-outline">
                Your logo goes here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Why CloudForUs</div>
            <h2 className="section-title">Outcome-focused, AWS-aligned.</h2>
            <p className="section-sub">
              We combine architecture, engineering, and operations to deliver
              measurable business outcomes on AWS.
            </p>
          </div>
          <div className="grid grid-4 grid-2">
            <div className="card">
              <div className="badge">Secure by design</div>
              <h3>Security & compliance built-in</h3>
              <p>
                Align to ISO, SOC 2, NIST and industry standards with detective
                controls, hardened identities, and automated evidence.
              </p>
            </div>
            <div className="card">
              <div className="badge">FinOps first</div>
              <h3>Spend aligned to value</h3>
              <p>
                Tagging, budgets, anomaly detection, and rightsizing ensure you
                optimize before you overspend.
              </p>
            </div>
            <div className="card">
              <div className="badge">SRE-led</div>
              <h3>Reliability you can reason about</h3>
              <p>
                SLOs, SRE playbooks, and observability help you ship faster
                without sacrificing uptime.
              </p>
            </div>
            <div className="card">
              <div className="badge">AWS aligned</div>
              <h3>MAP & Well-Architected ready</h3>
              <p>
                We structure work so you can benefit from AWS programs like MAP,
                Well-Architected, and Funding Readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Programs & accelerators</div>
            <h2 className="section-title">Proven playbooks, fast outcomes.</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>LaunchPad™ for Startups</h3>
              <p>
                MVP patterns, security baseline, IaC starter kits, and credits
                guidance to move from idea to PMF without burning runway.
              </p>
            </div>
            <div className="card">
              <h3>Navigator™ Landing Zone Accelerator</h3>
              <p>
                Multi-account governance with Control Tower, guardrails, SSO,
                logging, and network blueprint—ready to scale.
              </p>
            </div>
            <div className="card">
              <h3>GenAI Studio™ for Bedrock</h3>
              <p>
                Use-case ideation and a Bedrock POC in under two weeks—complete
                with safety, evals, and a path to production.
              </p>
            </div>
            <div className="card">
              <h3>FinSight™ FinOps Review</h3>
              <p>
                Cost baseline, RI/Savings Plan strategy, tagging policy, anomaly
                detection, and a monthly scorecard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Solutions</div>
            <h2 className="section-title">
              Architecture, engineering, and operations on AWS.
            </h2>
          </div>
          <div className="grid grid-3">
            <SolutionsTile
              to="/solutions/migration-modernization"
              title="Migration & Modernization"
              body="MAP-ready migration waves and modernization where it matters."
            />
            <SolutionsTile
              to="/solutions/landing-zone-governance"
              title="Landing Zone & Governance"
              body="Control Tower guardrails, SSO, and multi-account foundations."
            />
            <SolutionsTile
              to="/solutions/devops-platform"
              title="DevOps & Platform Engineering"
              body="CI/CD, infrastructure as code, observability, and SRE playbooks."
            />
            <SolutionsTile
              to="/solutions/containers-serverless"
              title="Containers & Serverless"
              body="EKS, ECS, Lambda, and event-driven patterns for elastic scale."
            />
            <SolutionsTile
              to="/solutions/data-analytics"
              title="Data & Analytics (Lakehouse)"
              body="Ingest, governance, and BI on a modern lakehouse foundation."
            />
            <SolutionsTile
              to="/solutions/genai-ml"
              title="GenAI & AI/ML"
              body="Practical GenAI on Amazon Bedrock and SageMaker."
            />
            <SolutionsTile
              to="/solutions/security-compliance"
              title="Security, Compliance & Zero Trust"
              body="Attestable posture with automated controls and evidence."
            />
            <SolutionsTile
              to="/solutions/finops-sustainability"
              title="FinOps & Sustainability"
              body="Cost optimization and sustainability KPIs as first-class metrics."
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Industries</div>
            <h2 className="section-title">
              Tailored for where you are and where you’re going.
            </h2>
          </div>
          <div className="grid grid-4 grid-2">
            <IndustryTile
              to="/industries/startups"
              title="Startups"
              body="From MVP to PMF with runway-aware architecture and credits guidance."
            />
            <IndustryTile
              to="/industries/smb"
              title="Small & Mid-Market"
              body="Modernize critical apps and improve resilience with predictable spend."
            />
            <IndustryTile
              to="/industries/enterprise"
              title="Enterprise"
              body="Portfolio-scale migration, platform engineering, and governance."
            />
            <IndustryTile
              to="/industries/public-sector"
              title="Public Sector"
              body="Secure, compliant, and efficient services for agencies and education."
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Plan your next 90 days on AWS.</h2>
              <p>
                Share your goals and constraints. We’ll respond with a clear,
                actionable roadmap.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Book a strategy consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


/* Small helper components for grids */

function SolutionsTile({ to, title, body }) {
  return (
    <Link to={to} className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  );
}

function IndustryTile({ to, title, body }) {
  return (
    <Link to={to} className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  );
}

/* SOLUTIONS PAGES */

function MigrationModernization() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Migrate with momentum. Modernize with purpose.</h1>
          <p>
            MAP-aligned methods, refactors where they matter, and hypercare that
            de-risks cutover.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Outcomes</h2>
              <ul className="list">
                <li>Lower TCO</li>
                <li>Faster releases</li>
                <li>Improved resilience</li>
                <li>Audit-ready controls</li>
              </ul>
              <h2>What we do</h2>
              <ul className="list">
                <li>Portfolio discovery and 6R strategy</li>
                <li>Landing zone alignment & account factory</li>
                <li>
                  Database & data-warehouse modernization (Aurora / Serverless,
                  DMS, SCT)
                </li>
                <li>
                  App modernization with containers, serverless, and
                  event-driven patterns
                </li>
                <li>Cutover planning, dry-runs, and validation</li>
                <li>Hypercare with rollback and success criteria</li>
              </ul>
              <h2>Deliverables</h2>
              <ul className="list">
                <li>Strategy deck and migration wave plan</li>
                <li>Infrastructure-as-code repositories</li>
                <li>Cutover & rollback plan with acceptance criteria</li>
                <li>Cost and budget model with KPI baseline</li>
              </ul>
            </div>
            <div>
              <h2>Our approach</h2>
              <ol className="list">
                <li>
                  <strong>Assess</strong> – discovery, readiness, and business
                  case.
                </li>
                <li>
                  <strong>Mobilize</strong> – landing zone, access, and pilot
                  workloads.
                </li>
                <li>
                  <strong>Migrate & Modernize</strong> – waves, refactors,
                  validation.
                </li>
                <li>
                  <strong>Hypercare</strong> – stability, cost tuning, and
                  handover.
                </li>
              </ol>
              <h2>Representative AWS services</h2>
              <ul className="list">
                <li>Control Tower, Organizations, IAM Identity Center</li>
                <li>CloudFormation / Terraform, DMS, SCT, Aurora, S3</li>
                <li>Lambda, ECS, EKS, CloudWatch, X-Ray</li>
              </ul>
              <div className="card">
                <h3>Microsoft on AWS spotlight</h3>
                <p className="muted">
                  Optimize Windows & SQL licensing and performance with AD on
                  AWS, FSx for Windows File Server, and .NET on Linux containers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function LandingZoneGovernance() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Secure multi-account foundations—ready to scale.</h1>
          <p>
            Establish governance without slowing delivery using AWS Control
            Tower and opinionated guardrails.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>What we set up</h2>
              <ul className="list">
                <li>AWS Organizations and Control Tower guardrails</li>
                <li>Account vending and SSO with IAM Identity Center</li>
                <li>Central logging, backups, and patch orchestration</li>
                <li>
                  Detective controls wired with Security Hub, GuardDuty, and
                  Detective
                </li>
                <li>Network baselines and connectivity patterns</li>
              </ul>
              <h2>Deliverables</h2>
              <ul className="list">
                <li>Landing zone reference architecture</li>
                <li>Guardrail and policy catalog</li>
                <li>Account vending process & SOPs</li>
                <li>
                  Change management & request workflows integrated with your
                  tooling
                </li>
              </ul>
            </div>
            <div>
              <h2>KPIs we care about</h2>
              <ul className="list">
                <li>Mean time to create a compliant account</li>
                <li>% of mandatory guardrails enforced</li>
                <li>Trend of audit and security findings over time</li>
              </ul>
              <h2>Common questions</h2>
              <ul className="list">
                <li>Control Tower vs. homegrown landing zones</li>
                <li>How identities & SSO integrate with existing IdPs</li>
                <li>Multi-region and multi-environment strategies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function DevOpsPlatform() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Ship faster with safer pipelines.</h1>
          <p>
            We build paved roads—pipelines, templates, and observability—so
            teams can focus on product while reliability stays visible.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Services</h2>
              <ul className="list">
                <li>CI/CD with CodePipeline, CodeBuild, or GitHub Actions</li>
                <li>
                  Infrastructure as code (Terraform, CDK, CloudFormation) with
                  reusable modules
                </li>
                <li>
                  Progressive delivery, blue/green and canary release patterns
                </li>
                <li>
                  Observability with CloudWatch, X-Ray, and centralized logging
                </li>
                <li>SRE incident playbooks and runbooks</li>
              </ul>
              <h2>Deliverables</h2>
              <ul className="list">
                <li>Git repos & pipeline templates</li>
                <li>SLO dashboards and alerting policies</li>
                <li>Incident response runbooks</li>
              </ul>
            </div>
            <div>
              <div className="card">
                <h3>Microsoft on AWS</h3>
                <p className="muted">
                  Optimized Windows/SQL builds, golden images, and license
                  hygiene backed by automated pipelines.
                </p>
              </div>
              <h2>Outcomes</h2>
              <ul className="list">
                <li>Higher deployment frequency with lower change failure rate</li>
                <li>Improved mean time to recover (MTTR)</li>
                <li>Clear ownership and guardrails for teams shipping to prod</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ContainersServerless() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Elastic scale, lower ops overhead.</h1>
          <p>
            Design the right runtime for each workload using EKS, ECS, Fargate,
            Lambda, and event-driven patterns.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Services</h2>
              <ul className="list">
                <li>EKS blueprints and multi-cluster strategy</li>
                <li>ECS/Fargate rollout with autoscaling</li>
                <li>Service mesh and traffic management</li>
                <li>API Gateway & Lambda serverless APIs</li>
                <li>EventBridge and SQS event-driven architectures</li>
                <li>Image supply-chain security with ECR and scanning</li>
              </ul>
            </div>
            <div>
              <h2>Outcomes</h2>
              <ul className="list">
                <li>Elastic capacity for peak events</li>
                <li>Reduced operational toil and infrastructure overhead</li>
                <li>Improved resilience and fault isolation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function DataAnalytics() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Governed data, business-ready insights.</h1>
          <p>
            Stand up a lakehouse with quality, lineage, and policy-based access.
            Publish KPIs in weeks, not months.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Services</h2>
              <ul className="list">
                <li>
                  Ingest & ETL pipelines with Kinesis, MSK, Glue, and
                  event-driven patterns
                </li>
                <li>S3 and Lake Formation for storage & governance</li>
                <li>Athena and Redshift for analytics</li>
                <li>
                  Semantic modeling and BI with QuickSight dashboards and KPI
                  scorecards
                </li>
                <li>Data quality, lineage, and access controls</li>
              </ul>
            </div>
            <div>
              <h2>Accelerator: DataPulse™</h2>
              <p className="muted">
                Stand-up a governed lakehouse with KPIs in 30–45 days, including
                ingestion jobs, quality checks, and BI governance.
              </p>
              <h2>Outcomes</h2>
              <ul className="list">
                <li>Faster decisions backed by trusted data</li>
                <li>Clear ownership and data contracts</li>
                <li>Ready foundation for AI/ML use-cases</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function GenAI() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Practical GenAI—secure, measurable, production-ready.</h1>
          <p>
            From customer support copilots to smart search, we build with
            Amazon Bedrock and SageMaker to keep data private and outcomes
            measurable.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Services</h2>
              <ul className="list">
                <li>Use-case discovery and ROI framing</li>
                <li>Bedrock model selection and guardrail design</li>
                <li>
                  RAG with Knowledge Bases and orchestrated agents (Bedrock
                  Agents / Step Functions)
                </li>
                <li>Fine-tuning, evals, safety, and governance</li>
                <li>MLOps on SageMaker for production workloads</li>
              </ul>
            </div>
            <div>
              <h2>Starter kits</h2>
              <ul className="list">
                <li>Customer support copilots over your documentation</li>
                <li>Smart search and content tagging</li>
                <li>Code and operations assistants for DevOps teams</li>
              </ul>
              <p className="muted">
                We evaluate accuracy, safety, and cost before scaling to
                production.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SecurityCompliance() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Compliance without compromise.</h1>
          <p>
            Shift security left and automate evidence. We instrument detective
            controls, harden identities, and prepare you for audits while
            enabling rapid delivery.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Services</h2>
              <ul className="list">
                <li>Security Hub posture and control mapping</li>
                <li>
                  GuardDuty, Detective, WAF/Shield tuning and incident triage
                </li>
                <li>Identity baselines with IAM & IAM Identity Center</li>
                <li>KMS encryption and secrets management</li>
                <li>Vulnerability and patch orchestration</li>
                <li>
                  Incident response runbooks and tabletop exercises
                </li>
                <li>
                  Compliance mappings to ISO 27001, SOC 2, HIPAA, PCI DSS, NIST
                  CSF (as applicable)
                </li>
              </ul>
            </div>
            <div>
              <h2>Outcomes</h2>
              <ul className="list">
                <li>Attestable security posture</li>
                <li>Reduced audit surprises</li>
                <li>Security embedded into everyday delivery</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FinOpsSustainability() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Spend less. Build more.</h1>
          <p>
            We make cost a first-class metric—tagging, budgets, automated
            rightsizing, and Graviton strategies to reduce spend and carbon.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Services</h2>
              <ul className="list">
                <li>Cost allocation, tagging policies, and chargeback</li>
                <li>Budgets and anomaly detection</li>
                <li>Rightsizing and autoscaling strategies</li>
                <li>Graviton and Savings Plans / RIs planning</li>
                <li>Data lifecycle and storage optimization</li>
                <li>Sustainability KPIs and reporting cadence</li>
              </ul>
            </div>
            <div>
              <h2>Outcomes</h2>
              <ul className="list">
                <li>Predictable cloud spend aligned to value</li>
                <li>Reduced cost per feature delivered</li>
                <li>Lower carbon footprint for workloads</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* INDUSTRIES */

function Startups() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>From MVP to PMF with runway-aware architecture.</h1>
          <p>
            LaunchPad gives founders a clear path: secure foundations, tested
            patterns, and early analytics—without surprise costs.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Pain points we solve</h2>
              <ul className="list">
                <li>Burn rate and limited engineering capacity</li>
                <li>Security and compliance readiness for early customers</li>
                <li>Unclear runways for cloud spend</li>
              </ul>
              <h2>Typical stack</h2>
              <ul className="list">
                <li>Serverless APIs and managed databases</li>
                <li>Landing zone “lite” and SOC2-ready controls</li>
                <li>Analytics starter and simple BI dashboards</li>
              </ul>
            </div>
            <div>
              <h2>LaunchPad™ inclusions</h2>
              <ul className="list">
                <li>Architecture & backlog shaping workshop</li>
                <li>MVP patterns catalog (serverless, containers)</li>
                <li>Security baseline & IaC starter kits</li>
                <li>Credits/funding guidance and runway modeling</li>
              </ul>
              <Link to="/programs" className="btn btn-primary">
                Apply to LaunchPad
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SMB() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Modernize core systems—predictably.</h1>
          <p>
            Package upgrades reduce risk: modernization sprints, DR-in-a-box,
            managed ops, and BI quickstarts.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Solutions map</h2>
              <ul className="list">
                <li>Application modernization bundles</li>
                <li>Ops24 Essential / Growth managed cloud tiers</li>
                <li>Disaster-recovery-in-a-box</li>
                <li>BI quickstart with governed data</li>
                <li>Microsoft on AWS optimizations</li>
              </ul>
            </div>
            <div>
              <h2>Business value</h2>
              <ul className="list">
                <li>Reduced downtime and faster incident recovery</li>
                <li>Predictable monthly operating costs</li>
                <li>A platform ready for future digital initiatives</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Enterprise() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Governed scale for complex portfolios.</h1>
          <p>
            We orchestrate waves of change with MAP-aligned guidance, platform
            blueprints, Zero Trust, and FinOps.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Solutions map</h2>
              <ul className="list">
                <li>MAP-aligned migration and modernization waves</li>
                <li>Platform blueprints for EKS/ECS and shared services</li>
                <li>Zero Trust identity and network patterns</li>
                <li>SRE enablement and incident management</li>
                <li>FinOps operating model and governance</li>
              </ul>
            </div>
            <div>
              <h2>Enterprise outcomes</h2>
              <ul className="list">
                <li>Consistent controls across business units</li>
                <li>Portfolio-level visibility into risk and spend</li>
                <li>Faster time-to-value for digital initiatives</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function PublicSector() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Secure, compliant, mission-ready.</h1>
          <p>
            Deliver citizen and student services with secure, efficient cloud.
            Governance accelerators and data transparency kits speed time to
            value.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Solutions map</h2>
              <ul className="list">
                <li>Governance accelerator and guardrails</li>
                <li>Secure collaboration and digital workplaces</li>
                <li>Data transparency portals and open data</li>
                <li>Digital services modernization</li>
                <li>
                  Compliance mappings with regional requirements and GovCloud
                  options where required
                </li>
              </ul>
            </div>
            <div>
              <h2>Value</h2>
              <ul className="list">
                <li>Improved service delivery and experience</li>
                <li>Reduced operational risk and technical debt</li>
                <li>Better data-driven decisions for policy</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* PROGRAMS */

function Programs() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Accelerate value with proven playbooks.</h1>
          <p>
            Programs and accelerators designed to compress time-to-value while
            staying aligned to AWS best practices.
          </p>
        </header>
        <section className="section">
          <div className="grid grid-2">
            <div className="card">
              <h3>LaunchPad™ for Startups</h3>
              <ul className="list">
                <li>Architecture & backlog shaping workshop</li>
                <li>MVP patterns catalog (serverless, containers)</li>
                <li>Security baseline & IaC starter kits</li>
                <li>Credits / funding guidance; runway modeling</li>
              </ul>
            </div>
            <div className="card">
              <h3>Well-Architected Sprint (10-day)</h3>
              <ul className="list">
                <li>High-impact review of 1–2 workloads</li>
                <li>Findings report mapped to 6 pillars</li>
                <li>Remediation backlog with cost/effort</li>
                <li>Optional “do-with-you” fixes in sprint 2</li>
              </ul>
            </div>
            <div className="card">
              <h3>Navigator™ Landing Zone Accelerator</h3>
              <ul className="list">
                <li>Control Tower setup with guardrails</li>
                <li>Account vending and SSO</li>
                <li>Central logging and detective controls</li>
                <li>Network & connectivity blueprint</li>
              </ul>
            </div>
            <div className="card">
              <h3>GenAI Studio™ (for Bedrock)</h3>
              <ul className="list">
                <li>Use-case ideation & ROI framing</li>
                <li>Prototype in ≤ 2 weeks on Bedrock</li>
                <li>Safety, evals, and governance pack</li>
                <li>Path to production with MLOps</li>
              </ul>
            </div>
            <div className="card">
              <h3>FinSight™ — FinOps Review</h3>
              <ul className="list">
                <li>Cost & usage baselining</li>
                <li>Savings Plan/RI strategy & Graviton plan</li>
                <li>Tagging policy & anomaly detection</li>
                <li>Roadmap with monthly scorecard</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="cta-band">
            <div>
              <h2>Explore the right program for your team.</h2>
              <p>Combine fixed-scope packs with agile delivery when needed.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Book a program intro call
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ABOUT */

function About() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Builders, architects, and operators focused on outcomes.</h1>
          <p>
            CloudForUs is a technology consulting and managed services company
            helping startups, SMBs, enterprises, and public sector teams
            accelerate outcomes on AWS—securely, compliantly, and
            cost-effectively.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <h2>Who we are</h2>
              <p className="muted">
                Senior architects, platform engineers, data and security
                specialists with deep AWS experience and multi-cloud literacy.
              </p>
              <h2>How we work</h2>
              <ul className="list">
                <li>Opinionated playbooks and reference architectures</li>
                <li>Transparent delivery with regular demos and updates</li>
                <li>Documentation you can own and evolve</li>
                <li>“Secure & cost-aware by default” is the standard</li>
              </ul>
            </div>
            <div>
              <h2>Values</h2>
              <ul className="list">
                <li>Customer trust above everything</li>
                <li>Measurable results, not just activity</li>
                <li>Learn, improve, and share knowledge</li>
                <li>Clarity and candor in how we communicate</li>
              </ul>
              <h2>Careers</h2>
              <p className="muted">
                We’re always interested in builders who care about measurable
                outcomes. If that sounds like you, get in touch.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* CONTACT */

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your details have been captured. In production, wire this form to your preferred backend / email."
    );
  };

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1>Let’s turn intent into impact.</h1>
          <p>
            Tell us your goals. We’ll bring clear next steps. We respond within
            one business day.
          </p>
        </header>
        <section className="section">
          <div className="two-col">
            <div>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Work Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" />
                </div>
                <div className="form-row">
                  <label htmlFor="role">Role</label>
                  <input id="role" name="role" />
                </div>
                <div className="form-row">
                  <label htmlFor="goals">Cloud goals</label>
                  <select id="goals" name="goals" defaultValue="">
                    <option value="" disabled>
                      Select your primary goal
                    </option>
                    <option>Migration</option>
                    <option>Modernization</option>
                    <option>Data / AI</option>
                    <option>Security</option>
                    <option>Cost</option>
                    <option>Managed Services</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your workloads, timelines, and constraints."
                  />
                </div>
                <div className="form-row">
                  <label>
                    <input type="checkbox" /> I would like to sign under NDA.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div>
              <h2>What to expect</h2>
              <ul className="list">
                <li>A reply within one business day</li>
                <li>
                  A short discovery call to understand your goals and context
                </li>
                <li>
                  An initial view of options, including AWS programs and
                  credits where applicable
                </li>
              </ul>
              <p className="muted">
                We can also work under a mutual NDA on request.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* APP ROOT */

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/solutions/migration-modernization"
            element={<MigrationModernization />}
          />
          <Route
            path="/solutions/landing-zone-governance"
            element={<LandingZoneGovernance />}
          />
          <Route
            path="/solutions/devops-platform"
            element={<DevOpsPlatform />}
          />
          <Route
            path="/solutions/containers-serverless"
            element={<ContainersServerless />}
          />
          <Route
            path="/solutions/data-analytics"
            element={<DataAnalytics />}
          />
          <Route path="/solutions/genai-ml" element={<GenAI />} />
          <Route
            path="/solutions/security-compliance"
            element={<SecurityCompliance />}
          />
          <Route
            path="/solutions/finops-sustainability"
            element={<FinOpsSustainability />}
          />
          <Route path="/industries/startups" element={<Startups />} />
          <Route path="/industries/smb" element={<SMB />} />
          <Route path="/industries/enterprise" element={<Enterprise />} />
          <Route
            path="/industries/public-sector"
            element={<PublicSector />}
          />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
