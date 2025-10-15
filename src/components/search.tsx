'use client'
import { create } from '@orama/orama'
import { useDocsSearch } from 'fumadocs-core/search/client'
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  TagsList,
  TagsListItem,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search'
import { useI18n } from 'fumadocs-ui/contexts/i18n'
import { useState } from 'react'

function initOrama() {
  return create({
    schema: { _: 'string' },
    language: 'english',
  })
}

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n()
  const [tag, setTag] = useState<string | undefined>()
  const { search, setSearch, query } = useDocsSearch({
    type: 'static',
    initOrama,
    locale,
    tag,
  })

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
        <SearchDialogFooter>
          <TagsList tag={tag} onTagChange={setTag}>
            <TagsListItem value="Antivirus">Anti-Virus</TagsListItem>
            <TagsListItem value="FAQ">FAQ</TagsListItem>
          </TagsList>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  )
}
