import {
  ActionIcon,
  Card,
  Group,
  Image,
  Menu,
  SimpleGrid,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconDots, IconFileZip, IconEye, IconTrash } from "@tabler/icons-react";
import { FC } from "react";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
];

interface CardSimpleProps {
  title: string;
  children: JSX.Element;
}

const CardSimple: FC<CardSimpleProps> = ({ title, children }) => {
  const { colors } = useMantineTheme();
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs" bg={colors.gray[1]}>
        <Group justify="space-between">
          <Text fw={600}>{title}</Text>
        </Group>
      </Card.Section>

      <Card.Section inheritPadding>{children}</Card.Section>
    </Card>
  );
};

export default CardSimple;
