import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const TableSelect =() => {
  return (
    <Select>
        <SelectTrigger className="bg-slate-100 w-fit">
          <SelectValue placeholder="Last 30 Days" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="last-30">Last 30 Days</SelectItem>
            <SelectItem value="last-60">Last 60 Days</SelectItem>
            <SelectItem value="last-90">Last 90 days</SelectItem>

          </SelectGroup>
        </SelectContent>
      </Select>
  )
}

export default TableSelect;