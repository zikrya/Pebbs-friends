import type * as React from "react"
import { ArrowUpDown } from "lucide-react"
import { SortContainer, SortButton, ButtonIcon } from "../styles/SortButtonsStyles"
import type { SortButtonsProps } from "../utils/types"

const SortButtons: React.FC<SortButtonsProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <SortContainer>
      <SortButton onClick={() => setSortOrder("asc")} $active={sortOrder === "asc"} aria-pressed={sortOrder === "asc"}>
        <ButtonIcon>
          <ArrowUpDown size={16} />
        </ButtonIcon>
        Sort A-Z
      </SortButton>
      <SortButton
        onClick={() => setSortOrder("desc")}
        $active={sortOrder === "desc"}
        aria-pressed={sortOrder === "desc"}
      >
        <ButtonIcon>
          <ArrowUpDown size={16} />
        </ButtonIcon>
        Sort Z-A
      </SortButton>
    </SortContainer>
  )
}

export default SortButtons


