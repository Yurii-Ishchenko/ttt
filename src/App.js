// import PaintingList from './components/PaintingList/PaintingList'
// import paintings from './painting.json'
// import Section from './components/Section/Section'
// import ColorPiker from './components/ColorPiker/ColorPiker'
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <Container>
      <Alert text="Ого ты шо!!!!" type="success" />
      <Alert text="Ого ты шо!!!!" type="warning" />
      <Alert text="Ого ты шо!!!!" type="error" />
    </Container>
  );
}

// export default function App() {

//   return (
//     <div>
//       <ColorPiker options={colorPickerOptions}/>
//     </div>
//   );
// }

// export default function App() {

//   return (
//     <div>
//       <Section title="Пивас по акции!!!!!">
// <PaintingList items={paintings} />
// </Section>

// <Section title="Лучшее">
// <PaintingList items={paintings} />
// </Section>

// <Section title="Лучшее">
// <PaintingList items={paintings} />
// </Section>
//     </div>
//   );
// }
