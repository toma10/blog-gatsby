import Content from "../components/Content"
import Heading from "../components/Heading"
import Page from "../components/Page"
import Paragraph from "../components/Paragraph"
import React from "react"
import Title from "../components/Title"

export default function About() {
  return (
    <Page>
      <Heading>
        <Title>About</Title>
      </Heading>
      <Content>
        <div className="space-y-6">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
            elementum mauris vitae tortor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos hymenaeos. Nullam
            sapien sem, ornare ac, nonummy non, lobortis a enim. In laoreet,
            magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet
            sapien wisi sed libero. Pellentesque arcu. Mauris elementum mauris
            vitae tortor.
          </Paragraph>
          <Paragraph>
            Ut tempus purus at lorem. Mauris suscipit, ligula sit amet pharetra
            semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.
            Vivamus porttitor turpis ac leo. Aliquam in lorem sit amet leo
            accumsan lacinia. Curabitur sagittis hendrerit ante. Vivamus luctus
            egestas leo. Nullam at arcu a est sollicitudin euismod. Cras pede
            libero, dapibus nec, pretium sit amet, tempor quis.
          </Paragraph>
          <Paragraph>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis condimentum augue id magna semper
            rutrum. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
            Etiam bibendum elit eget erat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </div>
      </Content>
    </Page>
  )
}
