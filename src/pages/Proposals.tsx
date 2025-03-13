import styled from "styled-components"
import tw from "twin.macro"

const ProposalsContainer = styled.div`
  ${tw`
    bg-white
    selection:text-black
    selection:bg-gray-500
      flex
      md:justify-center
      max-md:px-6
      pt-16
      pb-20
    `}
`
const ProposalsStyle = styled.div`
  ${tw`
      md:w-[729px]
    `}
`
function ResearchProposals() {
  return (
    <ProposalsContainer>
      <ProposalsStyle>
        <div id="proposals" className="w-full">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Call for Research Proposals
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              California Institute for Machine Consciousness (CIMC)
            </h2>
          </header>

          {/* Introduction */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              CIMC is inviting research proposals, with the aim of understanding
              the nature and functionality of consciousness from a
              computationalist perspective. We want to conduct experimental
              philosophy by formulating testable theories, conducting
              simulations, and building artifacts that allow us to explore and
              test our understanding of consciousness.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach is rooted in a rational, scientific epistemology,
              recognizing that current paradigms in philosophy of mind,
              neuroscience, and psychology fall short of comprehensively
              addressing mind and consciousness. We believe it is essential to
              develop new frameworks for understanding self, agency,
              intersubjectivity, and intelligence from first principles.
            </p>
            <p className="text-gray-700">
              We welcome contributions from those ready to move beyond mere
              hypothesis formation. If you are an observer, modeler, engineer,
              interdisciplinary thinker, or artist eager to conceive, build,
              iterate, and test innovative ideas, we want to hear from you.
            </p>
          </section>

          {/* Research Focus Areas */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Research Focus Areas
            </h2>
            <p className="text-gray-700 mb-4">
              We invite innovative research proposals in – but not limited to –
              the following broad categories. Proposals that venture outside the
              beaten path are welcome, provided they are of high quality and
              deeply considered.
            </p>
            <div className="space-y-6">
              {/* Area 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  1. Philosophical foundations and formalization of
                  consciousness
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    Investigate the space and metaphysics of analytical theories
                    of consciousness
                  </li>
                  <li>
                    What is consciousness, and how does it relate to mind,
                    modeling, and reality?
                  </li>
                  <li>
                    How can we characterize phenomenology, functionality, and
                    implementation?
                  </li>
                  <li>
                    Which systems can be conscious, and what are the necessary
                    and sufficient conditions?
                  </li>
                  <li>How can we test for consciousness?</li>
                </ul>
              </div>
              {/* Area 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  2. Methodology of modeling consciousness
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    Can we define the “strange loop” analytically and test this
                    formalization?
                  </li>
                  <li>
                    Should we search for consciousness by constructing and
                    analyzing simulation spaces?
                  </li>
                  <li>
                    Can studying biological systems reveal the nature of
                    consciousness?
                  </li>
                </ul>
              </div>
              {/* Area 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  3. Emergence and Role of Self in Learning Agents
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    Under what conditions does a learning agent form a
                    first-person perspective or self-model?
                  </li>
                  <li>How can we test for self-models?</li>
                  <li>What is a minimal self?</li>
                  <li>
                    Development and study of models that integrate mind,
                    self-model, motivation, and world-model interaction
                  </li>
                </ul>
              </div>
              {/* Area 4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  4. Learning Through Self Organization
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    If consciousness is discovered by the brain (as part of a
                    learning paradigm in a self organizing substrate), can we
                    replicate this process artificially?
                  </li>
                  <li>Can self organizing learning systems control agents?</li>
                  <li>
                    Can we get a self organizing system (eg. NCA) to learn
                    complex sequence prediction tasks?
                  </li>
                  <li>
                    Do we observe the discovery of self-improving self-reflexive
                    structure? What are the limitations of this paradigm?
                  </li>
                  <li>How can we understand the brain as a multiway system?</li>
                  <li>
                    Can we discover implications for consciousness in comparable
                    systems in nature (ie. how much does consciousness depend on
                    the specific architecture of a learning system?)
                  </li>
                </ul>
              </div>
              {/* Area 5 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  5. Architectures for Conscious Agents
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    What is the role of attention and attention control in
                    shaping conscious behavior?
                  </li>
                  <li>
                    How do perception, emotion, inference, and decision making
                    interact in the development of conscious behavior?
                  </li>
                  <li>
                    How can we model aspects of human and animal psychology
                    within artificial systems?
                  </li>
                </ul>
              </div>
              {/* Area 6 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  6. Developmental Learning Architectures
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    Can we design minimal, self-improving models that
                    continuously learn and adapt (anytime learning)?
                  </li>
                  <li>
                    Artificial pets as paradigms for experimentation and
                    interaction
                  </li>
                  <li>Social simulations</li>
                </ul>
              </div>
              {/* Area 7 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  7. Environments for Intelligent Behavior and Interaction
                  Between Humans and AI
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    Under which conditions do intelligence and agency emerge?
                  </li>
                  <li>
                    What is the role of embodiment for the formation of a mind?
                  </li>
                  <li>
                    How can we create artificial environments that effectively
                    evaluate AI behavior and facilitate human–AI interaction?
                  </li>
                </ul>
              </div>
              {/* Area 8 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  8. Consciousness and Selfhood in Current Foundation Models
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Do existing foundation models possess phenomenology?</li>
                  <li>
                    Can the self of simulated interaction agents be compared to
                    a personal self?
                  </li>
                  <li>
                    Can interpretability help us understand the bounds and
                    constraints of the possibilities of all possible simulacra
                    or of individual simulacra?
                  </li>
                  <li>
                    Is CoT a paradigm that can be compared to consciousness?
                  </li>
                  <li>
                    How does adding and removing certain modalities influence
                    the appearance of consciousness?
                  </li>
                </ul>
              </div>
              {/* Area 9 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  9. Extracting Models of Human Psychology from Foundation
                  Models
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    Use of foundation models to create virtual test subjects
                  </li>
                  <li>
                    Development of psychometric tools to evaluate the personas
                    of these models
                  </li>
                  <li>Comparing human and artificial psychology</li>
                </ul>
              </div>
              {/* Area 10 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  10. Transfer Between Artificial Intelligence Research,
                  Neuroscience, and Psychology
                </h3>
                <p className="text-gray-600">
                  What can AI research teach us about understanding biological
                  intelligence?
                </p>
              </div>
              {/* Area 11 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  11. Interaction Between Model Constraints and Substrate
                  Constraints
                </h3>
                <p className="text-gray-600">
                  How much does a model’s behavior depend on the underlying
                  substrate and its architecture?
                </p>
              </div>
              {/* Area 12 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  12. Empathetic AI
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>High fidelity human machine interfaces</li>
                  <li>Modeling of user intentions</li>
                  <li>Feedback between human and AI systems</li>
                  <li>Human augmentation</li>
                  <li>Machine perception</li>
                  <li>Mechanisms for human machine extension</li>
                </ul>
              </div>
              {/* Area 13 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  13. Ethics at the interface of human and non-human agents
                </h3>
                <p className="text-gray-600">
                  Ethics is one of the most important topics in the context of
                  artificial phenomenology, non-human agency, superhuman
                  capability and coordination between individual, society,
                  nature and artificial agents. It is also one of the most
                  difficult, given the counter-intuitive nature of the subject;
                  we invite contributions but will set a high bar.
                </p>
              </div>
              {/* Area 14 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  14. Futurism
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    What developments should we expect, and how will they
                    influence human society and identity?
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Submission Guidelines */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Submission Guidelines
            </h2>
            <p className="text-gray-700 mb-4">
              We welcome proposals that clearly articulate the research
              question, methodology, expected outcomes, and potential impact.
              Proposals should demonstrate understanding and alignment with
              CIMC’s epistemology and be geared toward actionable
              research—whether theoretical, experimental, or applied.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">Length:</p>
                <p className="text-gray-600">&gt; 4,000 words</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  Content guidelines:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    <span className="font-semibold">Abstract:</span> A concise
                    summary of the research objectives and significance (up to
                    250 words).
                  </li>
                  <li>
                    <span className="font-semibold">Research objectives:</span>{" "}
                    Research questions, goals and testable hypotheses.
                  </li>
                  <li>
                    <span className="font-semibold">Methodology:</span> Detailed
                    description of research methods, design, tools, frameworks,
                    and/or analytical approaches you intend to use.
                  </li>
                  <li>
                    <span className="font-semibold">Expected outcomes:</span>{" "}
                    Summary of the spectrum of possible research results and
                    their potential impact on the field of machine
                    consciousness.
                  </li>
                  <li>
                    <span className="font-semibold">Timeline:</span>{" "}
                    deliverables and their timeline.
                  </li>
                  <li>
                    <span className="font-semibold">Budget Justification:</span>{" "}
                    Outline and explain the proposed budget.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Team and collaborators
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Appendices</span> (if
                    applicable)
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  First Round Submission Deadline:
                </p>
                <p className="text-gray-600">Apr 10, 2025</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">How to Submit:</p>
                <p className="text-gray-600">
                  Upload your proposal{" "}
                  <a
                    href="https://form.typeform.com/to/VUXo8dsz"
                    className="text-blue-600 hover:underline"
                  >
                    here
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Inquiries:</p>
                <p className="text-gray-600">
                  For questions, please contact{" "}
                  <a
                    href="mailto:lou@cimc.org"
                    className="text-blue-600 hover:underline"
                  >
                    lou@cimc.org
                  </a>
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              We look forward to receiving your ideas.
            </p>
          </section>
        </div>
      </ProposalsStyle>
    </ProposalsContainer>
  )
}

export default ResearchProposals
