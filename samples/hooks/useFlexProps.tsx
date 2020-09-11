// import * as React from "react"
// import styled from "styled-components";

// export const useFlexProps = () => {
//   const [align, setAlign] = React.useState("flex-start");
//   const [justify, setJustify] = React.useState("flex-start");
//   const [gap, setGap] = React.useState(2);

//   const FlexProps = React.useCallback(() => {
//     return (
//       <Col border="4" fill gap='16px' padding='8px'>
//         <Row align="center" gap={2} justify="center">
//           <strong>Flex Props</strong>
//         </Row>
//         <strong>align:&nbsp;</strong>
//         <Button.Choice inverted w='120px' selected={align}>
//           <Button key="flex-start" onClick={_ => setAlign("flex-start")}>
//             start
//           </Button>
//           <Button key="center" onClick={_ => setAlign("center")}>
//             center
//           </Button>
//           <Button key="flex-end" onClick={_ => setAlign("flex-end")}>
//             end
//           </Button>
//           <Button key='strech' onClick={_ => setAlign("strech")}>
//             stretch
//           </Button>
//         </Button.Choice>
//         <strong>justify:&nbsp;</strong>
//         <Button.Choice inverted w='120px' selected={justify}>
//           <Button key='flex-start' onClick={_ => setJustify("flex-start")}>
//             start
//           </Button>
//           <Button key='center' onClick={_ => setJustify("center")}>
//             center
//           </Button>
//           <Button key='flex-end' onClick={_ => setJustify("flex-end")}>
//             end
//           </Button>
//           <Button key='space-between' onClick={_ => setJustify("space-between")}>
//             space-between
//           </Button>
//           <Button key='space-around' onClick={_ => setJustify("space-around")}>
//             space-around
//           </Button>
//         </Button.Choice>
//         <strong>gap:&nbsp;</strong>
//         <Button.Choice inverted w='120px' selected={gap}>
//           <Button key={0} onClick={_ => setGap(0)} >
//             0
//           </Button>
//           <Button key={1} onClick={_ => setGap(1)}>
//             1
//           </Button>
//           <Button key={2} onClick={_ => setGap(2)}>
//             2
//           </Button>
//           <Button key={3} onClick={_ => setGap(3)}>
//             3
//           </Button>
//           <Button key={4} onClick={_ => setGap(4)}>
//             4...
//           </Button>
//         </Button.Choice>
//         <Code h='120px'>
//           <Source language='js' code={`< align='${align}' justify='${justify}' gap={${gap}} />`} />
//         </Code>
//       </Col>
//     );
//   }, [align, justify, gap]);

//   return { FlexProps, align, justify, gap };
// };

// const Code = styled(Col)`
//   & > div {
//     flex: 1;
//   }
// `