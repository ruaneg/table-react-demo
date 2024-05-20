import { FileTable } from '~/pages/Home/FileTable';
import { FILES } from '~/pages/Home/FileTable/fileData';
import { CenteredContainer } from '~/components/Layout/CenteredContainer';

export function Home() {
  return (
    <CenteredContainer>
      <FileTable files={FILES} />
    </CenteredContainer>
  );
}
