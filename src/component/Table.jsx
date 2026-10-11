
import { Table } from "@heroui/react";

export default function Tablee({ product }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="বাজারের দামের তালিকা"
            className="min-w-[600px] w-full"
          >
            <Table.Header>
              <Table.Column isRowHeader>
                বাজার
              </Table.Column>
              <Table.Column>বিভাগ</Table.Column>
              <Table.Column>সর্বনিম্ন</Table.Column>
              <Table.Column>সর্বাধিক</Table.Column>
              <Table.Column>গড়</Table.Column>
            </Table.Header>

            <Table.Body>
              {product.markets.map((p, i) => (
                <Table.Row key={i}>
                  <Table.Cell>
                    <span className="font-semibold text-slate-800">
                      {p.market}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {p.division}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="font-semibold text-emerald-600">
                      {p.min} টাকা
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="font-semibold text-red-500">
                      {p.max} টাকা
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span className="inline-flex whitespace-nowrap rounded-lg bg-emerald-50 px-3 py-2 font-bold text-emerald-700">
                      {((p.min + p.max) / 2).toFixed(2)} টাকা
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}