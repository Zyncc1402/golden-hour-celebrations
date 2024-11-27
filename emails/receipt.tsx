import { capitalizeFirstLetter } from "@/lib/caplitaliseFirstLetter";
import formatCurrency from "@/lib/formatCurrency";
import { Reservations } from "@prisma/client";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const NikeReceiptEmail = ({
  getReservationDetails: {
    merchantTransactionID,
    balanceAmount,
    branch,
    cake,
    date,
    email,
    extraDecoration,
    gifts,
    phone,
    timeSlot,
    theatre,
    noPeople,
    occasion,
    name,
  },
}: {
  getReservationDetails: Reservations;
}) => (
  <Html>
    <Head />
    <Preview>Get your order summary, estimated delivery date and more</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={track.container}>
          <Row>
            <Column>
              <Text style={global.paragraphWithBold}>Transaction Number</Text>
              <Text style={track.number}>{merchantTransactionID}</Text>
            </Column>
            <Column align="right">
              <Link
                href="https://goldenhourcelebrations.in/contact"
                style={global.button}
              >
                Contact us
              </Link>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Heading style={global.heading}>
            Your Reservation has been Booked!
          </Heading>
          <Text style={{ ...global.text, marginTop: 24, textAlign: "left" }}>
            Dear {name},
            <br />
            We're thrilled to confirm your reservation with us! 🎉
            <br />
            Branch - {capitalizeFirstLetter(branch)}
            <br />
            Theatre -{" "}
            {theatre == "standard-theatre"
              ? "Standard Theatre"
              : "Romantic Theatre"}
            <br />
            Time - {timeSlot}
            <br />
            Ocassion - {occasion}
            <br />
            Phone - {phone}
            <br />
            {cake && `Cake - ${cake}`}
            <br />
            {extraDecoration && `Extra Decoration - ${extraDecoration}`}
            <br />
            {gifts && `Gifts - ${gifts}`}
            <br />
            Balance Amount Payable -{" "}
            {formatCurrency(balanceAmount).split(".")[0]}
            <br />
            <br />
            If you have any special requests or need further assistance, please
            don't hesitate to reach out.
          </Text>
        </Section>
        <Section style={paddingY}>
          <Row>
            <Text style={global.heading}>Golden Hour Celebrations ✨</Text>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Please contact us if you have any questions. (If you reply to this
              email, we won't be able to see it.)
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              © 2024 Golden Hour Celebrations, Inc. All Rights Reserved.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NikeReceiptEmail;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
