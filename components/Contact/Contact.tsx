import { Button } from "@chakra-ui/button";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { InputControl, TextareaControl } from "formik-chakra-ui";
import { FC } from "react";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  Contact;

  return (
    <Box bg="brand.300" p="8" id="contact">
      <Container maxW="1300px">
        <Heading textAlign="center" py={4}>
          Contact Us
        </Heading>

        <Formik
          initialValues={{ name: "", mobile: "", email: "", queries: "" }}
          onSubmit={(values) => {}}
        >
          <Form>
            <Stack justify="center" align="center">
              <SimpleGrid
                bg="white"
                borderRadius="xl"
                columns={2}
                boxShadow="xl"
                width="80%"
                spacing={4}
                p="4"
              >
                <GridItem colSpan={2}>
                  <InputControl
                    name="name"
                    inputProps={{ placeholder: "Enter Name ..." }}
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <InputControl
                    name="mobile"
                    inputProps={{ placeholder: "Enter Mobile Number ..." }}
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <InputControl
                    name="email"
                    inputProps={{ placeholder: "Enter Email ..." }}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <TextareaControl
                    name="queries"
                    textareaProps={{
                      placeholder: "Enter Queries ...",
                      variant: "filled",
                      bg: "brand.200",
                      focusBorderColor: "brand.600",
                      _hover: {
                        bg: "brand.300",
                      },
                    }}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Button type="submit" width="full">
                    Submit
                  </Button>
                </GridItem>
              </SimpleGrid>
            </Stack>
          </Form>
        </Formik>
      </Container>
    </Box>
  );
};
export default Contact;
