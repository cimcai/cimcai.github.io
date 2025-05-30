import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`pt-32 max-w-3xl mx-auto px-4 py-16 text-white`}
`

const Title = styled.h1`
  ${tw`text-3xl font-bold mb-6`}
`

const EffectiveDate = styled.p`
  ${tw`mb-4 text-sm text-white/60`}
`

const SectionTitle = styled.h2`
  ${tw`text-xl font-semibold mb-2 mt-10`}
`

const Paragraph = styled.p`
  ${tw`mb-4`}
`

const List = styled.ul`
  ${tw`list-disc pl-6 mb-4`}
`

const Divider = styled.hr`
  ${tw`my-8 border-white/20`}
`

function Terms() {
  return (
    <Container>
      <Title>Terms and Conditions</Title>
      <EffectiveDate>Effective Date: May 29, 2025</EffectiveDate>
      <Paragraph>
        Welcome to the California Institute for Machine Consciousness (“CIMC,”
        “we,” “us,” or “our”). These Terms and Conditions (“Terms”) govern your
        access to and use of our website at{" "}
        <a
          href="https://cimc.ai"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cimc.ai
        </a>{" "}
        (“Site”), operated by CIMC, a nonprofit public benefit corporation
        registered in the State of California.
      </Paragraph>
      <Paragraph>
        By accessing or using our Site, you agree to be bound by these Terms. If
        you do not agree, please do not use the Site.
      </Paragraph>
      <Divider />
      <SectionTitle>1. Use of Website</SectionTitle>
      <Paragraph>
        You may use the Site for lawful, non-commercial purposes related to
        CIMC’s mission as a nonprofit research institute. You agree not to:
      </Paragraph>
      <List>
        <li>
          Violate any applicable local, state, national, or international law;
        </li>
        <li>
          Interfere with or disrupt the security or functionality of the Site;
        </li>
        <li>
          Use any automated system or software to extract data from the Site
          without our prior written consent;
        </li>
        <li>
          Attempt to gain unauthorized access to any part of the Site, systems,
          or networks connected to it.
        </li>
      </List>
      <Divider />
      <SectionTitle>2. Intellectual Property</SectionTitle>
      <Paragraph>
        Unless otherwise stated, all content on this Site—including text,
        graphics, logos, images, videos, audio, publications, and software—is
        the intellectual property of the California Institute for Machine
        Consciousness or its licensors and is protected under applicable
        intellectual property laws.
      </Paragraph>
      <Paragraph>
        You may view, download, and print content for personal, educational, or
        research purposes, provided that proper attribution is given and no
        modifications are made. Use for commercial purposes is strictly
        prohibited without prior written permission from CIMC.
      </Paragraph>
      <Divider />
      <SectionTitle>3. Research Content and Disclaimer</SectionTitle>
      <Paragraph>
        The content provided on this Site is for general informational and
        educational purposes only. It may include publications, research
        findings, and other materials related to the field of machine
        consciousness.
      </Paragraph>
      <Paragraph>
        While we strive for accuracy, completeness, and timeliness, CIMC does
        not guarantee or warrant that the content is free of errors or that it
        will always be up to date. The information on the Site does not
        constitute professional advice and should not be relied upon as such.
      </Paragraph>
      <Divider />
      <SectionTitle>4. Third-Party Links</SectionTitle>
      <Paragraph>
        Our Site may include links to third-party websites. These links are
        provided for convenience only. CIMC does not control and is not
        responsible for the content, privacy policies, or practices of any
        third-party websites. Accessing third-party sites is at your own risk,
        and we encourage you to review their terms and policies.
      </Paragraph>
      <Divider />
      <SectionTitle>5. Privacy</SectionTitle>
      <Paragraph>
        Your use of the Site is also governed by our{" "}
        <span className="italic">[Privacy Policy]</span>, which outlines how we
        collect, use, and protect your personal information.
      </Paragraph>
      <Divider />
      <SectionTitle>6. Limitation of Liability</SectionTitle>
      <Paragraph>
        To the fullest extent permitted by law, CIMC and its officers,
        directors, affiliates, employees, and agents shall not be liable for any
        direct, indirect, incidental, special, or consequential damages arising
        out of or in any way related to your use of or inability to use the
        Site, even if we have been advised of the possibility of such damages.
      </Paragraph>
      <Divider />
      <SectionTitle>7. Indemnification</SectionTitle>
      <Paragraph>
        You agree to indemnify, defend, and hold harmless CIMC, its affiliates,
        officers, directors, employees, and agents from any claims, liabilities,
        damages, losses, and expenses (including reasonable attorneys’ fees)
        arising out of or related to your use of the Site or violation of these
        Terms.
      </Paragraph>
      <Divider />
      <SectionTitle>8. Modifications</SectionTitle>
      <Paragraph>
        We reserve the right to revise these Terms at any time without prior
        notice. Any updates will be posted on this page and are effective
        immediately upon posting. Your continued use of the Site after such
        changes constitutes your acceptance of the revised Terms.
      </Paragraph>
      <Divider />
      <SectionTitle>9. Governing Law</SectionTitle>
      <Paragraph>
        These Terms shall be governed by and construed in accordance with the
        laws of the State of California, without regard to its conflict of law
        provisions. Any dispute arising out of or relating to these Terms shall
        be subject to the exclusive jurisdiction of the state or federal courts
        located in California.
      </Paragraph>
    </Container>
  )
}

export default Terms
